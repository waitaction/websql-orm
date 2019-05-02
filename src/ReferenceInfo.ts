import { Table } from "./Table";

/**
 * 引用信息
 * */
export class ReferenceInfo {
    /**引用的表实例 */
    refTableInstance: Table;
    /**引用的列名 */
    refKeyName: string;
    /**外键名 */
    foreignKeyName:string;
    /**字段名 */
    propertyName:string;
}