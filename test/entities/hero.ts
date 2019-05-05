import { column, reference, database } from "../../src/Decorator";
import { Table } from "../../src/Table";
import { ColumnType } from "../../src/ColumnType";
import { BloodTypeEnum } from "./BloodTypeEnum";
import { skill } from "./skill";

/**
 * 英雄
 */
@database('hero_db')
export class hero extends Table {

    /**主键id */
    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;

    /**姓名 */
    @column(ColumnType.STRING) full_name: string;

    /**年龄 */
    @column(ColumnType.NUMBER) age: number;

    /**是否是女生 */
    @column(ColumnType.BOOLEAN) is_girl: boolean;

    /**加入时间 */
    @column(ColumnType.DATE) join_time: Date;

    /**身体数据 */
    @column(ColumnType.ANY) body_data: { stature: number, blood_type: BloodTypeEnum };

    /**技能 */
    @reference('id', new skill(), 'hero_id', (m) => m.name.indexOf('德') > 0) skills: Array<skill>;

}
