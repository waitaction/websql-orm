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
    static fromSql<T extends Table>(tableInstance: T, sql: string, value: Array<any>, isTrace?: boolean): Promise<Array<T>>;
    /**
     * 返回查询出的首条数据
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static fromSqlFirst<T extends Table>(tableInstance: T, sql: string, value: Array<any>, isTrace?: boolean): Promise<T>;
    /**
     * 数据库表是否存在记录，primaryValue是表记录的主键值
     * @param tableInstance 实体实列,例如 new student()
     * @param primaryValue 主键值
     */
    static exist<T extends Table>(tableInstance: T, primaryValue: string): Promise<boolean>;
    /**
     * 删除记录，primaryValue是表记录的主键值
     * @param tableInstance 实体实列,例如 new student()
     * @param primaryValue 主键值
     */
    static delete<T extends Table>(tableInstance: T, primaryValue: string | any): Promise<boolean>;
    /**
     * 插入记录,返回受影响的行数
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static insert<T extends Table>(value: T | Array<T>): Promise<number>;
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
    /**
     * 查询数据
     * @param tableInstance 实体实列,例如 new student()
     * @param param json对像参数，例如 { id:'e453c1e4-b7fc-4775-a2b4-26a0d834e83d' , user_name:'Tom' } , 类似于 where id='e453c1e4-b7fc-4775-a2b4-26a0d834e83d' and user_name='Tome'
     */
    static query<T extends Table>(tableInstance: T, param: any, isTrace?: boolean): Promise<Array<T>>;
    /**
     * 查询首条数据
     * @param tableInstance 实体实列,例如 new student()
     * @param param json对像参数，例如 { id:'e453c1e4-b7fc-4775-a2b4-26a0d834e83d' , user_name:'Tom' } , 类似于 where id='e453c1e4-b7fc-4775-a2b4-26a0d834e83d' and user_name='Tome'
     */
    static queryFirst<T extends Table>(tableInstance: T, param: any, isTrace?: boolean): Promise<T>;
    /**
     * 保存记录,如果记录不存在，则插入记录。如果存在，则修改记录
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static save<T extends Table>(value: T): Promise<number>;
    /**
     * 初始化实体
     */
    static init<T extends Table>(tableInstance: T): Promise<void>;
    /**
    * 使用sql语句查询数据，返回动态对像
    * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
    * @param value sql参数值,例如 ['Tom','Girl']
    */
    static fromSqlByJs(dbName: string, sql: string, value: Array<any>): Promise<Array<any>>;
    /**
     * 使用sql语句查询出首条数据，返回动态对像
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static fromSqlFirstByJs(dbName: string, sql: string, value: Array<any>): Promise<any>;
}
