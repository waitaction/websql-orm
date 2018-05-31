import { table } from "../src/decorators/table";
import { ColumnType } from "../src/model/ColumnType";
import { column } from "../src/decorators/column";
import { metadata } from "../src/decorators/metadata";

@table("student_db")
export class user extends metadata{
    @column(ColumnType.STRING)
    id:string;
    @column(ColumnType.STRING)
    name:string;
}