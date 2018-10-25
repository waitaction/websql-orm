/// <reference types="websql" />
export declare class DbManage {
    private static db;
    static getDataBase(dbName: string, dbMaxSize: number): Database;
}
