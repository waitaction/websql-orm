/// <reference types="@types/websql" />
import { DbMeta } from "./DbMeta";
import { GenerateSql } from "./GenerateSql";
import { ColumnType } from "./ColumnType";
import { ColumnInfo } from "./ColumnInfo";

export class Entity<T extends DbMeta>{
    private db: Database;
    private tableName: string; // 表名
    private dbName: string;// 数据库名
    private columnsDef: Array<ColumnInfo>;
    private gSql: GenerateSql;
    constructor(
        public objClass: { new(): T }) {
        this.gSql = new GenerateSql();
        this.tableName = this.objClass["__table_name__"];
        this.dbName = this.objClass["__db_name__"];
        this.columnsDef = this.objClass["__columns__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 10);
 
    }

    /**初始 */
    async init() {
        await this.createTable(this.columnsDef);
    }

    /**查询记录，只返回第一条 */
    async queryFirst(predicate: (m: T) => any): Promise<T> {
        let that = this;
        await this.init();
        let result: Array<any> = await this.queryAll();
        if (result != null && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let fResult = predicate(element);
                if (fResult) {
                    return that.convertToMetadata(element);
                }
            }
        }
        return null;
    }

    /**查询表的所有记录 */
    async queryAll<T>(): Promise<Array<T>> {
        let that = this;
        await this.init();
        let sql = `select * from ${this.tableName}`;
        let promise = new Promise<Array<T>>(resolve => {
            that.db.transaction((t) => {
                t.executeSql(sql, [], (b, result) => {
                    resolve(<any>result.rows);
                }, that.fail);
            });
        });
        return promise;
    }

    /**删除指定条件的记录 */
    async delete(predicate: (m: T) => void): Promise<boolean> {
        let that = this;
        await this.init();
        let result = await this.queryFirst(predicate);
        // 取主键
        let primaryKeyName: string;
        for (let index = 0; index < this.columnsDef.length; index++) {
            const element = this.columnsDef[index];
            if ((element.type & ColumnType.PRIMARY) == ColumnType.PRIMARY) {
                primaryKeyName = element.name;
            }
        }
        let sql = `delete from ${this.tableName} where ${primaryKeyName} = ? ;`;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction((t) => {
                t.executeSql(sql, [result[primaryKeyName]], (b, result) => {
                    resolve(result.rowsAffected > 0);
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
        let primaryCol = this.columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        let sql = `select * from ${this.tableName} where ${primaryCol.name} = ? ;`;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sql, [primaryValue], (b, result) => {
                    resolve(result.rows != null && result.rows.length > 0);
                }, that.fail);
            });
        });
        return promise;
    }
    /**创建表 */
    async createTable(columns: Array<ColumnInfo>): Promise<boolean> {
        let that = this;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(that.gSql.gCreateTableSql(that.tableName, columns), [], (t: SQLTransaction, result: SQLResultSet) => {
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
    /**插入记录 */
    async insert(value): Promise<boolean> {
        console.log(value);
        let sqlResult = this.gSql.gInsertSql(this.tableName, this.objClass["__columns__"], value);
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
    /**转化到实体元数据 */
    convertToMetadata(value: T): T {
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
    /**执行sql语句 */
    async execSql(sql: string, value: Array<any>): Promise<number> {
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
}
export function entity<T extends DbMeta>(objClass: { new(): T }) {
    let _entity = new Entity<T>(objClass);
    return _entity;
}