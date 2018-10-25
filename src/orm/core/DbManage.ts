export class DbManage {
    private static db: any;
    public static getDataBase(dbName: string, dbMaxSize: number): Database {
        if (this.db == null) {
            this.db = {};
        }
        if (this.db[dbName] == null) {
            this.db[dbName] = window.openDatabase(dbName, '1.0.0', '', dbMaxSize);
        }
        return this.db[dbName];
    }
}