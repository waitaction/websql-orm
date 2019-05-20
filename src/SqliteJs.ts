import { EnvConfig } from "./EnvConfig";
export class SqliteJs {

    constructor(public dbName: string) {

    }
    /**
    * 使用sql语句查询数据，返回动态对像
    * @param sql sql语句,例如 'select * from student where user_name = ? and gender = ? ;'
    * @param value sql参数值,例如 ['Tom','Girl']
    */
    async fromSql(sql: string, value: Array<any>): Promise<Array<any>> {
        let promise = new Promise<Array<any>>(resolve => {
            let db: Database;
            if (EnvConfig.useCordovaSqliteStorage) {
                db = window['sqlitePlugin'].openDatabase({ name: this.dbName, location: 'default' });
            } else {
                db = window.openDatabase(this.dbName, '1.0.0', '', 1024 * 1024 * 10);
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
    async fromSqlFirst(sql: string, value: Array<any>): Promise<any> {
        let result = await this.fromSql(sql, value);
        if (result != null && result.length > 0) {
            return result[0];
        } else {
            return null;
        }
    }

    /**
     * 执行sql语句
     * @param sql sql语句
     * @param value sql参数值,例如 ['Tom','Girl']
     */
    async execSql(sql: string, value: Array<number | string | Date | boolean | any>): Promise<number> {
        let promise = new Promise<number>(resolve => {
            let db: Database;
            db.transaction(function (t) {
                t.executeSql(sql, value, (b, result) => {
                    EnvConfig.debug(`execSql result: ${result.rowsAffected}`);
                    resolve(result.rowsAffected);
                }, (transaction: SQLTransaction, error: SQLError): boolean => {
                    EnvConfig.debug(error);
                    console.error(error.message);
                    return true;
                });
            });
        });
        return promise;
    }
}