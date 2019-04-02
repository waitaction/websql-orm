import { ColumnInfo } from "./ColumnInfo";
import { ColumnType } from "./ColumnType";

/**
 * 由实体类继承该类，操作sqlite 
 * */
export abstract class Table {
    /**列定义的信息 */
    public __columnsDef: Array<ColumnInfo>;
    /**主键列 */
    public __primaryColDef: ColumnInfo;
    /**表名 */
    public __tableName: string;
    constructor() {
        this.__columnsDef = this.constructor["__columns__"];
        this.__primaryColDef = this.__columnsDef.find(m => (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY);
        this.__tableName = this.constructor["__table_name__"]
        if (this.__primaryColDef == null) {
            throw `${this.__tableName} 实体未定义主键，每个实体必须定义一个主键，且只有一个，例如：@column(ColumnType.STRING | ColumnType.PRIMARY)`;
        }
    }

}