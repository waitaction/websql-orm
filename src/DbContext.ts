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

    /**
     * 插入记录 
     * */
    async insert(value: T | Array<T>): Promise<number> {
        let that = this;
        await this.init();
        let promise = new Promise<number>(resolve => {
            that.db.transaction(async (t) => {
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
                    resolve(rowsAffected);
                } else {
                    let sqlResult = that.gSql.gInsertSql(this.__tableName, this.objClass["__columns__"], value);
                    t.executeSql(sqlResult[0], sqlResult[1], (t: SQLTransaction, result: SQLResultSet) => {
                        resolve(result.rowsAffected);
                    }, (t, info) => {
                        that.fail(t, info);
                        resolve(0);
                        return true;
                    });
                }
            });
        });
        return promise;
    }
    /**
     * 修改记录 
     * */
    async update(value: T): Promise<number> {
        let primaryCol = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        let sqlResult = this.gSql.gUpdateSql(this.__tableName, primaryCol.name, value[primaryCol.name], value);
        let that = this;
        await this.init();
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
    private convertToMetadata(value: T): T {
        let result: T = new this.objClass();
        result["__diff__"] = {};
        for (const key in value) {
            if (value.hasOwnProperty(key)) {
                const element = value[key];
                result[key] = element;
                result["__diff__"][key] = element;
            }
        }
        return result;
    }
}