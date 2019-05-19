import { skill } from './entities/skill';
import { hero } from './entities/hero';
import { sqlite } from "../src/sqlite";
import { BloodTypeEnum } from './entities/BloodTypeEnum';


export class Demo {
    private lvbu_id = "da93faef-bfff-49c6-92b9-8807ec196bab";
    private liubei_id = "ed609b25-166f-41de-9bbc-90eb8891b688";
    private guanyu_id = "7289f8cb-496c-4057-b054-3bb4a3af1d6c";
    constructor() {
        var that = this;
        setTimeout(async () => {
            await that.addHero();
            await that.queryHeros();
            await that.queryHero(this.lvbu_id);
            await that.updateHero(this.liubei_id);
            await that.deleteHero(this.guanyu_id);
        }, 0);
    }

    /**添加英难 */
    async addHero() {
        /**添加几位英雄
         * 1.吕布
         * 2.刘备
         * 3.关羽
         */
        await this.deleteHeros();

        let lvbu = new hero();
        lvbu.id = this.lvbu_id;
        lvbu.age = 32;
        lvbu.full_name = "吕布";
        lvbu.is_girl = false;
        lvbu.join_time = new Date("2000/01/01");
        lvbu.body_data = { stature: 185, blood_type: BloodTypeEnum.A };

        let liubei = new hero();
        liubei.id = this.liubei_id;
        liubei.age = 31;
        liubei.full_name = "刘备";
        liubei.is_girl = false;
        liubei.join_time = new Date("2001/02/01");
        liubei.body_data = { stature: 178, blood_type: BloodTypeEnum.B };

        let guanyu = new hero();
        guanyu.id = this.guanyu_id;
        guanyu.age = 30;
        guanyu.full_name = "关羽";
        guanyu.is_girl = false;
        guanyu.join_time = new Date("2001/02/01");
        guanyu.body_data = { stature: 180, blood_type: BloodTypeEnum.AB };

        await sqlite.save(lvbu);
        await sqlite.save(liubei);
        await sqlite.save(guanyu);

        //添加技能
        await this.addSkills();
    }

    /**添加技能 */
    async addSkills() {
        //给吕布添加技能
        let lvbu_skill = new skill();
        lvbu_skill.id = this.uuid();
        lvbu_skill.name = "方天画斩";
        lvbu_skill.descript = "方天画斩是吕布第一伤害技能";
        lvbu_skill.harm = 76;
        lvbu_skill.hero_id = this.lvbu_id;

        //给刘备添加技能
        let liubei_skill = new skill();
        liubei_skill.id = this.uuid();
        liubei_skill.name = "以德服人";
        liubei_skill.descript = "刘备清除身上的控制效果，并获得护盾，护盾存在期间刘备免疫控制";
        liubei_skill.harm = 50;
        liubei_skill.hero_id = this.liubei_id;

        //给关羽添加技能
        let guanyu_skill = new skill();
        guanyu_skill.id = this.uuid();
        guanyu_skill.name = "青龙偃月";
        guanyu_skill.descript = "关羽这个英雄要持续不断的跑才能发挥本身的威力";
        guanyu_skill.harm = 70;
        guanyu_skill.hero_id = this.guanyu_id;

        let result = await sqlite.insert([lvbu_skill, liubei_skill, guanyu_skill]);
        if (result > 0) {
            console.log("添加技能成功");
        } else {
            console.log("添加技能失败")
        }


    }

    /**删除英雄 */
    async deleteHero(id: string) {
        let delResult = await sqlite.delete(new hero(), id);
        if (!delResult) {
            console.warn(`删除英雄${id}失败`);
        } else {
            console.log(`删除英雄${id}成功`);
        }
    }
    /**删除所有英雄 */
    async deleteHeros() {
        var success = true;
        var heros = await sqlite.fromSql(new hero(), "select * from hero", []);
        if (heros != null && heros.length > 0) {
            for (let index = 0; index < heros.length; index++) {
                const element = heros[index];
                let delResult = await sqlite.delete(new hero(), element.id);
                if (!delResult) {
                    success = false;
                }
            }
        }
        if (!success) {
            console.warn("删除所有英雄失败");
        } else {
            console.log("删除所有英雄成功");
        }

    }
    /**修改英雄 */
    async updateHero(id) {
        var _hero = await sqlite.queryFirst(new hero(), { id: id });
        _hero.join_time = new Date();
        await _hero.save();
        console.log("修改英雄");
    }

    /**查询所有英雄 */
    async queryHeros() {
        var heros = await sqlite.fromSql(new hero(), "select * from hero", []);
        console.log("查询所有英雄:");
        console.log(heros);
    }

    /**查询指定的项雄 */
    async queryHero(id: string) {
        var hero_ = await sqlite.fromSql(new hero(), "select * from hero where id = ?", [id]);
        console.log("查询英雄:");
        console.log(hero_);

        var hero_queryBySql = await sqlite.queryBySql("hero_db", "select * from hero where id = ?", [id]);
        console.log("queryBySql:");
        console.log(hero_queryBySql);

        var hero_queryFirstBySql = await sqlite.queryFirstBySql("hero_db", "select * from hero where id = ?", [id]);
        console.log("queryFirstBySql");
        console.log(hero_queryFirstBySql);

        var _hero = await sqlite.query(new hero(), { id: id });
        console.log("查询英雄:");
        console.log(_hero);

        var __hero = await sqlite.queryFirst(new hero(), { id: id });
        console.log("查询英雄:");
        console.log(__hero);

        var ___hero = await sqlite.fromSqlFirst(new hero(), "select * from hero where id = ?", [id]);
        console.log("查询英雄:");
        console.log(___hero);

        /**测试引用的bug */
        var _skill = new skill();
        _skill.id = this.uuid();
        _skill.harm = 10;
        _skill.hero_id = ___hero.id;
        _skill.name = "fdsa"
        ___hero.skills.push(_skill);
        sqlite.save(___hero);
    }

    /**
     * 生成伪guid
     */
    public uuid(): string {
        let s: any[] = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = "-";
        let uuid = s.join("");
        return uuid;
    }
}
new Demo();