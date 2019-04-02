/**
 * 列类型 
 * */
export enum ColumnType {
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
    PRIMARY = 128
}