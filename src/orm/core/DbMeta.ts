import { Entity } from "./Entity";
import { GenerateSql } from "./GenerateSql";
import { ColumnInfo } from "../model/ColumnInfo";
import { ColumnType } from "../model/ColumnType";

/**由实体类继承该类，DbMeta类用于操作sqlite数据 */
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
    /*
    *保存数据到数据库 
    */
    async save(): Promise<boolean> {
        let change = this.queryChange();

        let diff = this["__diff__"];
        let isExist = await this.exist();
        if (isExist && change == null) {
            throw "创建记录失败，若修改记录，需要执行查询操作，在查询的结果修改，再调用save()方法保存";
        }
        let sql: [string, any[]];
        if (isExist && change != null) {
            sql = this.gSql.gUpdateSql(this.tableName, this.primaryColDef.name, this[this.primaryColDef.name], change);
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
            return change;
        } else {
            return null
        }
    }
    /**
     * 数据库表是否已有记录，以主键ID为识别依据
     */
    private async exist(): Promise<boolean> {
        let _entity = new Entity(<any>this.constructor);
        let isExist = await _entity.exist(this[this.primaryColDef.name]);
        return isExist;
    }

    /**查询记录 */
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
    /**查询记录，仅返回一条 */
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
    /**删除记录 */
    static async delete<T extends DbMeta>(predicate: (m: T) => void): Promise<boolean> {
        let result = await this.queryFirst(predicate);
        let entity = new Entity<T>(<any>this);
        let delResult = await entity.delete(predicate);
        return delResult;
    }

    /**导入记录以进行操作,一般用于导入ajax返回的数据 */
    static import<T extends DbMeta>(value: any): T {
        let entity = new Entity<T>(<any>this);
        return entity.convertToMetadata(value);
    }

}