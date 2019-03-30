import { table, column, ColumnType, Table } from 'src/sqlite';


@table("test_table")
export class test_table extends Table {
    
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
    @column(ColumnType.STRING ) 
    password: string;
}