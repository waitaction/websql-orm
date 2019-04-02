import { ColumnType } from "./ColumnType";
import { ColumnInfo } from "./ColumnInfo";

/**
 * 用于定义列的装饰器
 */
export function column(type: ColumnType) {
    return function (target: any, name: string) {
        let _column: ColumnInfo = {
            name: name,
            type: type
        }
        let _target = target.constructor;
        if (!_target["__columns__"]) {
            _target["__columns__"] = new Array<ColumnInfo>();
        }
        _target["__columns__"].push(_column);
    }
}


/**
 * 用于定义表的装饰器
 */
export function table(dbName: string) {
    return function (target: any) {
        target["__db_name__"] = dbName;
        target["__table_name__"] = target.name;
    };
}