import { ColumnInfo } from "../model/ColumnInfo";
export declare class GenerateSql {
    constructor();
    /**
     * 生成创建表sql语句
     */
    gCreateTableSql(tableName: string, columnDef: Array<ColumnInfo>): string;
    /**
     * 生成插入记录sql语句
     */
    gInsertSql(tableName: string, columnsDef: any, value: any): [string, Array<any>];
    /**
    * 生成更新记录sql语句
    */
    gUpdateSql(tableName: string, primaryKeyName: string, primaryKeyValue: string, diffValue: any): [string, Array<any>];
}
