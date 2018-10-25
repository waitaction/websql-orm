/// <reference types="websql" />
import { DbMeta } from "./DbMeta";
import { ColumnInfo } from "../model/ColumnInfo";
export declare class Entity<T extends DbMeta> {
    objClass: {
        new (): T;
    };
    private db;
    private tableName;
    private dbName;
    private columnsDef;
    private gSql;
    constructor(objClass: {
        new (): T;
    });
    init(): Promise<void>;
    queryFirst(predicate: (m: T) => any): Promise<T>;
    queryAll<T>(): Promise<Array<T>>;
    delete(predicate: (m: T) => void): Promise<boolean>;
    existRecord(primaryValue: string): Promise<boolean>;
    createTable(columns: Array<ColumnInfo>): Promise<boolean>;
    insert(value: any): Promise<boolean>;
    convertToMetadata(value: T): T;
    execSql(sql: string, value: Array<any>): Promise<number>;
    fail(transaction: SQLTransaction, error: SQLError): boolean;
}
export declare function entity<T extends DbMeta>(objClass: {
    new (): T;
}): Entity<T>;
