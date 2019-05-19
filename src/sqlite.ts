/// <reference types="@types/websql" />
import { Table } from "./Table";
import { DbContext } from "./DbContext";
import { EnvConfig } from "./EnvConfig";

/**
 * sqlite orm
 */
export class sqlite {
    /**
     * 返回查询出的数据数组
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static async fromSql<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<Array<T>> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return context.fromSql(sql, value);
    }
    /**
     * 使用sql语句查询数据，返回动态对像
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static async queryBySql(dbName: string, sql: string, value: Array<any>): Promise<Array<any>> {
        let promise = new Promise<Array<any>>(resolve => {
            let db: Database;
            if (EnvConfig.useCordovaSqliteStorage) {
                db = window['sqlitePlugin'].openDatabase({ name: dbName, location: 'default' });
            } else {
                db = window.openDatabase(dbName, '1.0.0', '', 1024 * 1024 * 10);
            }
            db.transaction(function (t) {
                t.executeSql(sql, value, async (b, result) => {
                    var datas: Array<any> = [];
                    EnvConfig.debug(result);
                    if (result.rows != null && result.rows.length > 0) {
                        for (let index = 0; index < result.rows.length; index++) {
                            let element = result.rows.item(index);
                            datas.push(element);
                        }
                    }
                    resolve(datas);
                }, (transaction: SQLTransaction, error: SQLError): boolean => {
                    EnvConfig.debug(error);
                    console.error(error.message);
                    return true;
                });
            });
        });
        return promise;
    }
    /**
     * 使用sql语句查询出首条数据，返回动态对像
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static async queryFirstBySql(dbName: string, sql: string, value: Array<any>): Promise<any> {
       let result=await this.queryBySql(dbName,sql,value);
       if (result!=null && result.length>0){
           return result[0];
       }else{
           return null;
       }
    }
    /**
     * 返回查询出的首条数据
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    static async fromSqlFirst<T extends Table>(tableInstance: T, sql: string, value: Array<any>): Promise<T> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        var result = await context.fromSql(sql, value);
        if (result != null && result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }

    /**
     * 数据库表是否存在记录，primaryValue是表记录的主键值
     * @param tableInstance 实体实列,例如 new student()
     * @param primaryValue 主键值
     */
    static async exist<T extends Table>(tableInstance: T, primaryValue: string): Promise<boolean> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return context.exist(primaryValue);
    }

    /**
     * 删除记录，primaryValue是表记录的主键值
     * @param tableInstance 实体实列,例如 new student()
     * @param primaryValue 主键值
     */
    static async delete<T extends Table>(tableInstance: T, primaryValue: string): Promise<boolean> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return context.delete(primaryValue);
    }

    /**
     * 插入记录,返回受影响的行数
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static async insert<T extends Table>(value: T | Array<T>): Promise<number> {
        if ((value instanceof Array) && value.length > 0) {
            for (let index = 0; index < value.length; index++) {
                const element: T = value[index];
                element.checkColDef();
            }
            var context = new DbContext<T>(<any>value[0].constructor);
            return context.insert(value);
        }
        else {
            (<T>value).checkColDef();
            var context = new DbContext<T>(<any>value.constructor);
            return context.insert(value);
        }
    }
    /**
     * 修改记录,返回受影响的行数
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static async update<T extends Table>(value: T): Promise<number> {
        value.checkColDef();
        var context = new DbContext<T>(<any>value.constructor);
        return context.update(value);
    }

    /**
     * 执行sql语句,返回受影响的行数
     * @param tableInstance 实体实列,例如 new student()
     * @param sql sql语句,例如 'insert into (id,user_name,gender) values (?,?,?);'
     * @param value sql参数值,例如 ['e453c1e4-b7fc-4775-a2b4-26a0d834e83d',Tom','Girl']
     */
    static async execSql<T extends Table>(tableInstance: T, sql: string, value: Array<number | string | Date | boolean | any>): Promise<number> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return context.execSql(sql, value);
    }
    /**
     * 查询数据
     * @param tableInstance 实体实列,例如 new student()
     * @param param json对像参数，例如 { id:'e453c1e4-b7fc-4775-a2b4-26a0d834e83d' , user_name:'Tom' } , 类似于 where id='e453c1e4-b7fc-4775-a2b4-26a0d834e83d' and user_name='Tome'
     */
    static async query<T extends Table>(tableInstance: T, param: any): Promise<Array<T>> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        return context.query(param);
    }

    /**
     * 查询首条数据
     * @param tableInstance 实体实列,例如 new student()
     * @param param json对像参数，例如 { id:'e453c1e4-b7fc-4775-a2b4-26a0d834e83d' , user_name:'Tom' } , 类似于 where id='e453c1e4-b7fc-4775-a2b4-26a0d834e83d' and user_name='Tome'
     */
    static async queryFirst<T extends Table>(tableInstance: T, param: any): Promise<T> {
        var context = new DbContext<T>(<any>tableInstance.constructor);
        var result = await context.query(param);
        if (result != null) {
            return result[0]
        } else {
            return null;
        }
    }

    /**
     * 保存记录,如果记录不存在，则插入记录。如果存在，则修改记录
     * @param value 定义的实体实例数据，例如 var stu = new student(); stu.user_name = 'Tom' ...
     */
    static async save<T extends Table>(value: T): Promise<number> {
        var context = new DbContext<T>(<any>value.constructor);
        return context.save(value);
    }
}








