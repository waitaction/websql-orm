import { ColumnType } from "../model/ColumnType";
/**
 * 用于定义列的装饰器
 */
export declare function column(type: ColumnType): (target: any, name: string) => void;
