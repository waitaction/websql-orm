/// <reference types="websql" />
export declare class DatabaseManage {
    private static db;
    static getDataBase(dbName: string, dbMaxSize: number): Database;
}
