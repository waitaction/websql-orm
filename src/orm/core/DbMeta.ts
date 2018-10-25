import { Entity } from "./Entity";
import { GenerateSql } from "./GenerateSql";
import { ColumnInfo } from "../model/ColumnInfo";
import { ColumnType } from "../model/ColumnType";



export abstract class DbMeta {
    private gSql: GenerateSql;
    private columnsDef: Array<ColumnInfo>;
    private primaryColDef: ColumnInfo;
    private tableName: string;
    constructor() {
        this.gSql = new GenerateSql();
        this.columnsDef = this.constructor["__columns__"];
        this.primaryColDef = this.columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        this.tableName = this.constructor["__table_name__"]
    }

    async save(): Promise<boolean> {
        let change = this.queryChange();
        let diff = this["__diff__"];
        let isExist = await this.existRecord();
        let sql: [string, any[]];
        if (isExist) {
            sql = this.gSql.gUpdateSql(this.tableName, this.primaryColDef.name, diff[this.primaryColDef.name], change);
        } else {
            sql = this.gSql.gInsertSql(this.tableName, this.columnsDef, this);
        }
        let _entity = new Entity(<any>this.constructor);
        let resultN = await _entity.execSql(sql[0], sql[1]);
        return resultN > 0;
    }

    /**
     * 查询被修改的字段信息
     */
    private queryChange(): any {
        let change = {};
        let diff = this["__diff__"];
        if (diff != null) {
            for (const key in diff) {
                if (diff.hasOwnProperty(key)) {
                    const element = diff[key];
                    if (this[key] != element) {
                        change[key] = this[key];
                    }
                }
            }
        }
        return change;
    }

    private async existRecord(): Promise<boolean> {
        //let diff = this["__diff__"];
        let _entity = new Entity(<any>this.constructor);
        let isExist = await _entity.existRecord(this[this.primaryColDef.name]);
        return isExist;
    }

    static async  query<T extends DbMeta>(predicate: (m: T) => any): Promise<Array<T>> {
        let entity = new Entity(<any>this);
        let result = await entity.queryAll<T>()
        if (result != null && result.length > 0) {
            let list: Array<T> = [];
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let fResult = predicate(element);
                if (fResult) {
                    list.push(<T>entity.convertToMetadata(element));
                }
            }
            return list;
        }
        return null;
    }

    static async queryFirst<T extends DbMeta>(predicate: (m: T) => any): Promise<T> {
        let entity = new Entity<T>(<any>this);
        let result = await entity.queryAll<T>()
        if (result != null && result.length > 0) {
            for (let index = 0; index < result.length; index++) {
                const element = result[index];
                let fResult = predicate(element);
                if (fResult) {
                    return entity.convertToMetadata(element);
                }
            }
        }
        return null;
    }

    static async delete<T extends DbMeta>(predicate: (m: T) => void): Promise<boolean> {
        let result = await this.queryFirst(predicate);
        let entity = new Entity<T>(<any>this);
        let delResult = await entity.delete(predicate);
        return delResult;
    }

    static import<T extends DbMeta>(value: any): T {
        let entity = new Entity<T>(<any>this);
        return entity.convertToMetadata(value);
    }

}