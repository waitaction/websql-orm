import { ColumnInfo } from "../model/ColumnInfo";
import { ColumnType } from "../model/ColumnType";

export class GenerateSql {
    constructor() {

    }

    /**
     * 生成创建表sql语句
     */
    gCreateTableSql(tableName: string, columnDef: Array<ColumnInfo>): string {
        let sql = "CREATE TABLE IF NOT EXISTS " + tableName;
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
    gInsertSql(tableName: string, columnsDef: any, value: any): [string, Array<any>] {
        let that = this;
        let sql: string = `insert into ${tableName} `;
        let cols = [];
        let qs = [];
        if (columnsDef instanceof Array && columnsDef.length > 0) {
            let param: Array<any> = [];
            for (let index = 0; index < columnsDef.length; index++) {
                const col = columnsDef[index];
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
    gUpdateSql(tableName: string, primaryKeyName: string, primaryKeyValue: string, diffValue: any): [string, Array<any>] {
        let that = this;
        let sql: string = `update ${tableName} set `;
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

    gWhereSql(predicate: (m: any) => void): [string, Array<any>] {
        let pStr = predicate.toString();
        // this.gWhereSql(m => m.id == str) //把变量 str 的值取出来就可以转换成sql了
        // 正则取条件
        return null;
    }
}