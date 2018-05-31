import { ColumnType } from "../model/ColumnType";
import { ColumnInfo } from "../model/ColumnInfo";

/**
 * 用于定义列的装饰器
 */
export function column(type: ColumnType) {
    return function (target: any, name: string) {
        let _column:ColumnInfo = {
            name:name,
            type:type
        }
        let _target = target.constructor;
        if (!_target["__columns__"]) {
            _target["__columns__"] = new Array<ColumnInfo>();
        }
        _target["__columns__"].push(_column);
    }
}