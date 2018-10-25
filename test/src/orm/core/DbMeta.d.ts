export declare abstract class DbMeta {
    private gSql;
    private columnsDef;
    private primaryColDef;
    private tableName;
    constructor();
    save(): Promise<boolean>;
    /**
     * 查询被修改的字段信息
     */
    private queryChange;
    private existRecord;
    static query<T extends DbMeta>(predicate: (m: T) => void): Promise<Array<T>>;
    static queryFirst<T extends DbMeta>(predicate: (m: T) => void): Promise<T>;
    static delete<T extends DbMeta>(predicate: (m: T) => void): Promise<boolean>;
    static import<T extends DbMeta>(value: any): T;
}
