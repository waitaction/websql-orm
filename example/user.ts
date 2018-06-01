import { table } from "../src/decorators/table";
import { ColumnType } from "../src/model/ColumnType";
import { column } from "../src/decorators/column";
import { BaseMetadata } from "../src/decorators/BaseMetadata";

@table("student_db")
export class user extends BaseMetadata {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    name: string;
}