import { Table } from "./Table";
/**
 * sqlite orm
 */
export declare class sqlite {
    /**
     * 返回查询出的数据数组
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static fromSql<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<Array<T>>;
    /**
     * 返回查询出的首条数据
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static fromSqlFirst<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<T>;
    /**
     * 数据库表是否存在记录，primaryValue是表记录的主键值
     * @param tableInstance 实体实列,例如 new student()
     * @param primaryValue 主键值
     */
    static exist<T extends Table>(tableInstance: T, primaryValue: string): Promise<boolean>;
    /**
     * 插入记录,返回受影响的行数
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static insert<T extends Table>(value: T): Promise<number>;
    /**
     * 修改记录,返回受影响的行数
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static update<T extends Table>(value: T): Promise<number>;
    /**
     * 执行sql语句,返回受影响的行数
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'insert into (id,user_name,gender) values (?,?,?);'
     * @param value sql参数值,例如 ['e453c1e4-b7fc-4775-a2b4-26a0d834e83d',Tom','Girl']
     */
    static execSql<T extends Table>(tableInstance: T, sql: string, value: Array<number | string | Date | boolean | any>): Promise<number>;
}
