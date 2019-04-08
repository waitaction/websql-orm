import { Table } from "./Table";
import { ColumnInfo } from "./ColumnInfo";
import { GenerateSql } from "./GenerateSql";
import { ColumnType } from "./ColumnType";

export class DbContext<T extends Table>{
    private db: Database;
    private __tableName: string; // 表名
    private dbName: string;// 数据库名
    private __columnsDef: Array<ColumnInfo>;
    private gSql: GenerateSql;
    constructor(
        public objClass: { new(): T }) {
        this.gSql = new GenerateSql();
        this.__tableName = this.objClass["__table_name__"];
        this.dbName = this.objClass["__db_name__"];
        this.__columnsDef = this.objClass["__columns__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 10);
    }



    /**
     * 查询表的所有记录 
     * */
    async  fromSql(sql: string, value: Array<any>): Promise<Array<T>> {
        let that = this;
        await this.init();
        let promise = new Promise<Array<T>>(resolve => {
            that.db.transaction((t) => {
                t.executeSql(sql, value, (b, result) => {
                    var datas: Array<T> = [];
                    if (result.rows != null && result.rows.length > 0) {
                        for (let index = 0; index < result.rows.length; index++) {
                            const element = result.rows[index];
                            datas.push(that.convertToMetadata(element));
                        }
                    }
                    resolve(datas);
                }, that.fail);
            });
        });
        return promise;
    }
    async query(param: any): Promise<Array<T>> {
        await this.init();
        var sql = `select * from ${this.__tableName} where`;
        var par = [];
        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                const element = param[key];
                sql += ` ${key}=? and`
                par.push(element);
            }
        }
        sql = sql.substr(0, sql.length - 3);
        var result = await this.fromSql(sql, par);
        return result;
    }

    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    async exist(primaryValue: string): Promise<boolean> {
        let that = this;
        await this.init();
        let primaryCol = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        let sql = `select * from ${this.__tableName} where ${primaryCol.name} = ? ;`;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sql, [primaryValue], (b, result) => {
                    resolve(result.rows != null && result.rows.length > 0);
                }, that.fail);
            });
        });
        return promise;
    }
    async save(value: T): Promise<number> {
        await this.init();
        let primaryCol = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        var isExist = await this.exist(value[primaryCol.name]);
        if (isExist) {
            //修改
            return this.update(value);
        } else {
            //插入
            return this.insert(value);
        }
    }
    /**
     * 插入记录 
     * */
    async insert(value: T | Array<T>): Promise<number> {
        let that = this;
        await this.init();
        if ((value instanceof Array) && value.length > 0) {
            var rowsAffected = 0;
            for (let index = 0; index < value.length; index++) {
                try {
                    const element = value[index];
                    var _rowsAffected = await that.insert(element);
                    rowsAffected += _rowsAffected;
                } catch (error) {
                    console.error(error);
                }
            }
            return rowsAffected;
        }
        let promise = new Promise<number>(resolve => {
            that.db.transaction(async (t) => {
                let sqlResult = that.gSql.gInsertSql(that.__tableName, that.objClass["__columns__"], value);
                t.executeSql(sqlResult[0], sqlResult[1], (t: SQLTransaction, result: SQLResultSet) => {
                    resolve(result.rowsAffected);
                }, (t, info) => {
                    that.fail(t, info);
                    resolve(0);
                    return true;
                });
            });
        });
        return promise;
    }
    /**
     * 修改记录 
     * */
    async update(value: T): Promise<number> {
        let that = this;
        await this.init();
        let primaryCol = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        let sqlResult = this.gSql.gUpdateSql(this.__tableName, primaryCol.name, value[primaryCol.name], value);
        let promise = new Promise<number>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sqlResult[0], sqlResult[1], (t: SQLTransaction, result: SQLResultSet) => {
                    resolve(result.rowsAffected);
                }, (t, info) => {
                    that.fail(t, info);
                    resolve(0);
                    return true;
                });
            });
        });
        return promise;
    }

    /**执行sql语句 */
    async execSql(sql: string, value: Array<number | string | Date | boolean | any>): Promise<number> {
        let that = this;
        await this.init();
        let promise = new Promise<number>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sql, value, (b, result) => {
                    resolve(result.rowsAffected);
                }, that.fail);
            });
        });
        return promise;
    }

    fail(transaction: SQLTransaction, error: SQLError): boolean {
        console.error(error.message);
        return true;
    }


    /**
     * 初始 
     * */
    private async init() {
        await this.createTable(this.__columnsDef);
    }

    /**
     * 创建表 
     * */
    private async createTable(columns: Array<ColumnInfo>): Promise<boolean> {
        let that = this;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(that.gSql.gCreateTableSql(that.__tableName, columns), [], (t: SQLTransaction, result: SQLResultSet) => {
                    resolve(result.insertId == 1);
                }, (t, info) => {
                    that.fail(t, info);
                    resolve(false);
                    return true;
                });
            });
        });
        return promise;
    }
    /**
     * 转化到实体元数据 
     * */
    public convertToMetadata(value: T): T {
        let result: T = new this.objClass();
        result["__diff__"] = {};
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                const element = value[key];
                //从表取到的数据转换成定义的类型
                let colDef = result.__columnsDef.find(m => m.name == key);
                var colValue = this.convertToColType(element, colDef);
                result["__diff__"][key] = colValue;
                result[key] = colValue;
            }
        }
        return result;
    }
    /**从表取到的数据转换成 @column 定义的类型 */
    public convertToColType(val: any, colInfo: ColumnInfo): any {
        try {
            //数值类型
            if ((colInfo.type & ColumnType.NUMBER) === ColumnType.NUMBER) {
                return parseFloat(val);
            }
            //任意类型
            if ((colInfo.type & ColumnType.ANY) === ColumnType.ANY) {
                if (typeof (val) == "string") {
                    return JSON.parse(val.toString());
                }
                if (typeof (val) == "number") {
                    return val;
                } else {
                    return val;
                }
            }
            //布尔类型
            if ((colInfo.type & ColumnType.BOOLEAN) === ColumnType.BOOLEAN) {
                if (val == "" || val == null) {
                    return null;
                } else {
                    if (val === "true") {
                        return true;
                    }
                    else if (val === "false") {
                        return false;
                    } else if (typeof (val) == "number") {
                        return !!val;
                    }
                }
            }
            //日期类型
            if ((colInfo.type & ColumnType.DATE) === ColumnType.DATE) {
                if (typeof (val) == "string") {
                    return new Date(val.toString());
                }
                if (typeof (val) == "number") {
                    let len = val.toString().length;
                    let str = val.toString();
                    if (len < 13) {
                        for (let index = 0; index < (13 - len); index++) {
                            str += "0";
                        }
                    }
                    return new Date(parseInt(str));
                } else {
                    return null;
                }
            }
            //字符串类型
            if ((colInfo.type & ColumnType.STRING) === ColumnType.STRING) {
                if (val != null) {
                    return val.toString();
                } else {
                    return null;
                }
            }
            //数组类型
            if ((colInfo.type & ColumnType.ARRAY) === ColumnType.ARRAY) {
                try {
                    return JSON.parse(val.toString());
                } catch (error) {
                    return null;
                }
            }
        } catch (error) {
            console.error(error);
            return null;
        }

    }
}