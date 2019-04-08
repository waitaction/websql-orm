import { table, column, database } from "../src/Decorator";
import { ColumnType } from "../src/ColumnType";
import { Table } from "../src/Table";

@database("student_db")
export class class_info extends Table {
    @column(ColumnType.PRIMARY | ColumnType.STRING)
    id: string;
    @column(ColumnType.STRING)
    name: string;
}