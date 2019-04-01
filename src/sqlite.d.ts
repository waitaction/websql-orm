/// <reference types="websql" />
/**
 * 列类型
 * */
export declare enum ColumnType {
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
    PRIMARY = 128,
}
/**列信息 */
export declare class ColumnInfo {
    name: string;
    type: ColumnType;
}
/**
 * 用于定义列的装饰器
 */
export declare function column(type: ColumnType): (target: any, name: string) => void;
/**
 * 用于定义表的装饰器
 */
export declare function table(dbName: string): (target: any) => void;
/**
 * 生成sql语句
 */
export declare class GenerateSql {
    constructor();
    /**
     * 生成创建表sql语句
     */
    gCreateTableSql(__tableName: string, columnDef: Array<ColumnInfo>): string;
    /**
     * 生成插入记录sql语句
     */
    gInsertSql(__tableName: string, __columnsDef: any, value: any): [string, Array<any>];
    /**
    * 生成更新记录sql语句
    */
    gUpdateSql(__tableName: string, primaryKeyName: string, primaryKeyValue: string, diffValue: any): [string, Array<any>];
}
/**
 * 由实体类继承该类，操作sqlite
 * */
export declare abstract class Table {
    /**列定义的信息 */
    private __columnsDef;
    /**主键列 */
    private __primaryColDef;
    /**表名 */
    private __tableName;
    constructor();
}
export declare class DbContext<T extends Table> {
    objClass: {
        new (): T;
    };
    private db;
    private __tableName;
    private dbName;
    private __columnsDef;
    private gSql;
    constructor(objClass: {
        new (): T;
    });
    /**
     * 查询表的所有记录
     * */
    fromSql(sql: string, value: Array<any>): Promise<Array<T>>;
    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    exist(primaryValue: string): Promise<boolean>;
    /**
     * 插入记录
     * */
    insert(value: T): Promise<boolean>;
    /**
     * 修改记录
     * */
    update(value: T): Promise<boolean>;
    /**执行sql语句 */
    execSql(sql: string, value: Array<number | string | Date | boolean | any>): Promise<number>;
    fail(transaction: SQLTransaction, error: SQLError): boolean;
    /**
     * 初始
     * */
    private init();
    /**
     * 创建表
     * */
    private createTable(columns);
    /**
     * 转化到实体元数据
     * */
    private convertToMetadata(value);
}
export declare class sqlite {
    /**
     * 查询表的所有记录
     **/
    static fromSql<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<Array<T>>;
    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    static exist<T extends Table>(tableInstance: T, primaryValue: string): Promise<boolean>;
    /**
     * 插入记录
     * */
    static insert<T extends Table>(value: T): Promise<boolean>;
    /**
     * 修改记录
     * */
    static update<T extends Table>(value: T): Promise<boolean>;
    /**执行sql语句 */
    static execSql<T extends Table>(tableInstance: T, sql: string, value: Array<number | string | Date | boolean | any>): Promise<number>;
}
