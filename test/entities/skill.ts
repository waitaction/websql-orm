import { column, reference, database } from "../../src/Decorator";
import { Table } from "../../src/Table";
import { ColumnType } from "../../src/ColumnType";
/**英雄技能 */
@database('hero_db')
export class skill extends Table {

    /**主键id */
    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;
    
    /**技能名称 */
    @column(ColumnType.STRING) name: string;

    /**技能描述 */
    @column(ColumnType.STRING) descript: string;

    /**伤害值 */
    @column(ColumnType.NUMBER) harm: number;

    /**英雄id */
    @column(ColumnType.STRING) hero_id:string;
}