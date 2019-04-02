import { table, column } from "../src/Decorator";
import { Table } from "../src/Table";
import { ColumnType } from "../src/ColumnType";

 

@table('test_table1')
// tslint:disable-next-line:class-name
export class test_table1 extends Table {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
}
