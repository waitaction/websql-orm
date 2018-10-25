/**
 * 用于定义表的装饰器
 */
export function table(dbName: string) {
    return function (target) {
        target["__db_name__"] = dbName;
        target["__table_name__"] = target.name;
    };
}
