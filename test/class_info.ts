import { column, database } from "../src/Decorator";
import { ColumnType } from "../src/ColumnType";
import { Table } from "../src/Table";

@database("student_db")
export class class_info extends Table {
    @column(ColumnType.PRIMARY | ColumnType.STRING)
    id: string;
    @column(ColumnType.STRING)
    name: string;
    @column(ColumnType.NUMBER)
    type: number;
    @column(ColumnType.NUMBER)
    type2: number;
    @column(ColumnType.NUMBER)
    index: number;

    @column(ColumnType.DATE)
    create_time: Date;
}