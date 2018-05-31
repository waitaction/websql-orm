import { Entity } from "./entity";



export abstract class metadata {
    private db: Database;
    private tableName: string; //表名
    private dbName: string;//数据库名
    constructor() {
        this.tableName = this["__table_name__"];
        this.dbName = this["__db_name__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 100);
    }
   
    update() { }
    delete() { }
    query() { }
 
}