import { table } from "../../orm/decorators/table";
import { DbMeta } from "../../orm/core/DbMeta";
import { column } from "../../orm/decorators/column";
import { ColumnType } from "../../orm/model/ColumnType";

@table("student_db")
export class user extends DbMeta {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
    @column(ColumnType.STRING ) 
    password: string;
}