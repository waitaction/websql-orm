import { metadata } from "./metadata";
import { ColumnInfo } from "../model/ColumnInfo";
import { ColumnType } from "../model/ColumnType";

export class Entity<T>{
    private db: Database;
    private tableName: string; //表名
    private dbName: string;//数据库名
    constructor(
        public objClass: { new(): T }) {
        this.init().then();
    }

    async init() {
        this.tableName = this.objClass["__table_name__"];
        this.dbName = this.objClass["__db_name__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 100);
        await this.createTable(this.objClass["__columns__"]);
    }

    async first(predicate: (m: T) => void) {
        this.queryAll().then();
    }

    /**
     * 查询表所有数据
     */
    queryAll() {
        let that = this;
        let sql = `select * from ${this.tableName}`;
        let promise = new Promise(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sql, [], (b, result) => {
                    resolve()
                }, that.fail);
            });
        });
        return promise;
    }
    /**
     * 创建表
     */
    createTable(columns: Array<ColumnInfo>): Promise<boolean> {
        let that = this;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(that.gCreateTableSql(columns), [], (t: SqlTransaction, result: SqlResultSet) => {
                    resolve(result.insertId == 1);
                }, (t, info) => {
                    that.fail(t, info);
                    resolve(false);
                });
            });
        });
        return promise;
    }
    async insert(value): Promise<boolean> {
        console.log(value);
        let sql = this.gInsertSql(this.tableName, this.objClass["__columns__"]);
        let that = this;
        let promise = new Promise<boolean>(resolve => {
            that.db.transaction(function (t) {
                t.executeSql(sql, [], (t: SqlTransaction, result: SqlResultSet) => {
                    resolve(result.insertId == 1);
                }, (t, info) => {
                    that.fail(t, info);
                    resolve(false);
                });
            });
        });
        return promise;
    }
    private gInsertSql(tableName: string, data: any): string {
        let that = this;
        let sql: string = `insert into ${tableName} `;
        let cols = [];
        let qs = [];
        if (data instanceof Array && data.length > 0) {
            for (let index = 0; index < data.length; index++) {
                const col = data[index];
                cols.push(col.name);
                qs.push('?');
            }
            sql += " (" + cols.join(',') + ") Values (" + qs.join(',') + ")";
            return sql;
        } else {
            return null;
        }
    }
    gCreateTableSql(colums: Array<ColumnInfo>): string {
        let sql = "CREATE TABLE IF NOT EXISTS " + this.tableName;
        let colSql = [];
        if (colums instanceof Array && colums.length > 0) {
            for (var i in colums) {
                let _type: string;
                switch (colums[i].type) {
                    case ColumnType.STRING:
                        _type = "TEXT";
                        break;
                    case ColumnType.NUMBER:
                        _type = "NUMERIC";
                        break;
                    case ColumnType.BOOLEAN:
                        _type = "INTEGER";
                        break;
                    case ColumnType.ARRAY:
                        _type = "TEXT";
                        break;
                    case ColumnType.ANY:
                        _type = "TEXT";
                        break;
                    default:
                        break;
                }
                colSql.push(colums[i].name + ' ' + _type);
            }
        }
        sql = sql + " (" + colSql.join(', ') + ")";
        return sql;
    }

    fail(t, info) {
        console.error(info.message);
    }

}
export function entity<T>(objClass: { new(): T }) {
    let _entity = new Entity(objClass);
    return _entity;
}