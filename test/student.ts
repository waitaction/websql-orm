import { table, column } from "../src/Decorator";
import { Table } from "../src/Table";
import { ColumnType } from "../src/ColumnType";

@table('student')
export class student extends Table {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
    @column(ColumnType.DATE)
    create_time:Date;
}
