/// <reference types="@types/websql" />
/**
 * 列类型 
 * */
export enum ColumnType {
    /**布尔型 */
    BOOLEAN = 2,
    /**数值型 */
    NUMBER = 4,
    /**字符串型 */
    STRING = 8,
    /**数组型 */
    ARRAY = 16,
    /**日期时间型 */
    DATE = 32,
    /**任意类型 */
    ANY = 64,
    /**主键型 */
    PRIMARY = 128
}

/**列信息 */
export class ColumnInfo {
    name: string;
    type: ColumnType;
}

/**
 * 用于定义列的装饰器
 */
export function column(type: ColumnType) {
    return function (target: any, name: string) {
        let _column: ColumnInfo = {
            name: name,
            type: type
        }
        let _target = target.constructor;
        if (!_target["__columns__"]) {
            _target["__columns__"] = new Array<ColumnInfo>();
        }
        _target["__columns__"].push(_column);
    }
}


/**
 * 用于定义表的装饰器
 */
export function table(dbName: string) {
    return function (target) {
        target["__db_name__"] = dbName;
        target["__table_name__"] = target.name;
    };
}
/**
 * 生成sql语句
 */
export class GenerateSql {
    constructor() {

    }

    /**
     * 生成创建表sql语句
     */
    gCreateTableSql(__tableName: string, columnDef: Array<ColumnInfo>): string {
        let sql = "CREATE TABLE IF NOT EXISTS " + __tableName;
        let colSql = [];
        if (columnDef instanceof Array && columnDef.length > 0) {
            for (let index = 0; index < columnDef.length; index++) {
                const element = columnDef[index];
                let _type: string;
                _type = "TEXT";
                if ((element.type & ColumnType.STRING) === ColumnType.STRING) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.NUMBER) === ColumnType.NUMBER) {
                    _type = "NUMERIC";
                }
                if ((element.type & ColumnType.BOOLEAN) === ColumnType.BOOLEAN) {
                    _type = "INTEGER";
                }
                if ((element.type & ColumnType.ARRAY) === ColumnType.ARRAY) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.ANY) === ColumnType.ANY) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.PRIMARY) === ColumnType.PRIMARY) {
                    _type += " PRIMARY KEY NOT NULL";
                }
                colSql.push(element.name + ' ' + _type);
            }

        }
        sql = sql + " (" + colSql.join(', ') + ")";
        return sql;
    }

    /**
     * 生成插入记录sql语句
     */
    gInsertSql(__tableName: string, __columnsDef: any, value: any): [string, Array<any>] {
        let that = this;
        let sql: string = `insert into ${__tableName} `;
        let cols = [];
        let qs = [];
        if (__columnsDef instanceof Array && __columnsDef.length > 0) {
            let param: Array<any> = [];
            for (let index = 0; index < __columnsDef.length; index++) {
                const col = __columnsDef[index];
                cols.push(col.name);
                qs.push('?');
                param.push(value[col.name]);
            }
            sql += " (" + cols.join(',') + ") values (" + qs.join(',') + ")";
            let tuple: [string, Array<any>] = [sql, param];
            return tuple;
        } else {
            return null;
        }
    }

    /**
    * 生成更新记录sql语句
    */
    gUpdateSql(__tableName: string, primaryKeyName: string, primaryKeyValue: string, diffValue: any): [string, Array<any>] {
        let that = this;
        let sql: string = `update ${__tableName} set `;
        let cols = [];
        let param: Array<any> = [];
        if (diffValue != null) {
            for (const key in diffValue) {
                if (diffValue.hasOwnProperty(key)) {
                    if (key == primaryKeyName) {
                        continue;
                    }
                    const element = diffValue[key];
                    cols.push(key);
                    param.push(element);
                }
            }
        }
        sql += cols.join(" = ? , ") + " = ? where " + primaryKeyName + " = " + "?" + " ;";
        param.push(primaryKeyValue);
        let tuple: [string, Array<any>] = [sql, param];
        return tuple;

    }
}
/**
 * 由实体类继承该类，操作sqlite 
 * */
export abstract class Table {
    /**列定义的信息 */
    private __columnsDef: Array<ColumnInfo>;
    /**主键列 */
    private __primaryColDef: ColumnInfo;
    /**表名 */
    private __tableName: string;
    constructor() {
        this.__columnsDef = this.constructor["__columns__"];
        this.__primaryColDef = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        this.__tableName = this.constructor["__table_name__"]
        if (this.__primaryColDef == null) {
            throw `${this.__tableName} 实体未定义主键，每个实体必须定义一个主键，且只有一个，例如：@column(ColumnType.STRING | ColumnType.PRIMARY)`;
        }
    }

}
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
    async insert(value: T): Promise<boolean> {
        let sqlResult = this.gSql.gInsertSql(this.__tableName, this.objClass["__columns__"], value);
        let that = this;
        await this.init();
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sqlResult[0], sqlResult[1], (t: SQLTransaction, result: SQLResultSet) => {
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
     * 修改记录 
     * */
    async update(value: T): Promise<boolean> {
        let primaryCol = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        let sqlResult = this.gSql.gUpdateSql(this.__tableName, primaryCol.name, value[primaryCol.name], value);
        let that = this;
        await this.init();
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sqlResult[0], sqlResult[1], (t: SQLTransaction, result: SQLResultSet) => {
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

export class sqlite {
    /**
     * 查询表的所有记录 
     **/
    static async fromSql<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<Array<T>> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return await context.fromSql(sql, value);
    }

    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    static async exist<T extends Table>(tableInstance: T,primaryValue: string): Promise<boolean> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return await context.exist(primaryValue);
    }

    /**
     * 插入记录 
     * */
    static async insert<T extends Table>(value: T): Promise<boolean> {
        var context = new DbContext<T>(<any>value.constructor);
        return await context.insert(value);
    }
    /**
     * 修改记录 
     * */
    static async update<T extends Table>(value: T): Promise<boolean> {
        var context = new DbContext<T>(<any>value.constructor);
        return await context.update(value);
    }

    /**执行sql语句 */
    static async execSql<T extends Table>(tableInstance: T,sql: string, value: Array<number | string | Date | boolean | any>): Promise<number> {    
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return await context.execSql(sql, value);
    }

}








