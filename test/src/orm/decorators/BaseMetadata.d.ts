export declare abstract class BaseMetadata {
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
    static query<T extends BaseMetadata>(predicate: (m: T) => void): Promise<Array<T>>;
    static queryFirst<T extends BaseMetadata>(predicate: (m: T) => void): Promise<T>;
    static delete<T extends BaseMetadata>(predicate: (m: T) => void): Promise<boolean>;
    static import<T extends BaseMetadata>(value: any): T;
}
