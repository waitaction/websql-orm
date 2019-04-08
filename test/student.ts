import { table, column, reference, database } from "../src/Decorator";
import { Table } from "../src/Table";
import { ColumnType } from "../src/ColumnType";
/**
 * 班级信息表 
 * */
@database('student_db')

export class student extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;

    @column(ColumnType.STRING)
    user_name: string;

    @column(ColumnType.NUMBER)
    age: number;

    @column(ColumnType.BOOLEAN)
    isGirl: boolean;

    @column(ColumnType.DATE)
    create_time: Date;

    @column(ColumnType.ARRAY)
    stu_data: Array<string>;

    @column(ColumnType.ANY)
    other_data: { age: number, isGril: boolean };

    @column(ColumnType.STRING)
    @reference("class_info", "id")
    class_id: string;
}
