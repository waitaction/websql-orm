
# 介绍

`websql-orm` 框架，支持 `typescript` `angular` `cordova` `ionic` `chrome` 的sqlite数据库读写。

[![npm](https://badgen.net/npm/v/websql-orm)](https://www.npmjs.com/package/websql-orm)
[![install size](https://badgen.net/packagephobia/install/websql-orm)](https://packagephobia.now.sh/result?p=websql-orm)
[![downloads](https://badgen.net/npm/dt/websql-orm)](https://www.npmjs.com/package/websql-orm)

[English Document](README.md)

## 开始

`websql-orm` 使用 `TypeScript` 语言编写，使用之前需在 `tsconfig.json` 添加装饰器配置项以启用装饰器特性.

``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

## 安装

`npm install websql-orm@latest`
>提示：不要安装2.1.0之前的版本，2.1.0之前的版本是调试阶段的版本，无法使用

`cordova plugin add cordova-sqlite-storage`
>若在 cordova项目中，则需要安装cordova插件

``` typescript
import { EnvConfig } from 'websql-orm';

EnvConfig.useCordovaSqliteStorage = true;
```

## 启用调试日志

``` typescript
import { EnvConfig } from 'websql-orm';

EnvConfig.enableDebugLog = true;
```

## 定义表

如何使用实体类定义一个表?

``` typescript
import { database, column, ColumnType, Table } from 'websql-orm';

@database("student_db","student")
export class student extends Table {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
}
```

> 1) 装饰器`@database` 定义student表，类名 student 是表名, `student_db` 是数据库名。  
> 2) 装饰器 `@column` 定义列，`ColumnType.STRING` 表示该字段是文本类型  
> 3) 每个表必须拥有一个主键字段，`ColumnType.PRIMARY` 表示该字段为主键字段  
> 4) 每个实体类必须继承 `Table`

### 装饰器说明

| 装饰器名   | 描述         | 示例                                 |
| ---------- | ------------ | ------------------------------------ |
| @database  | 定义表       | @database("db_name","table_name") |
| @column    | 定义列       | @column(ColumnType.STRING)           |
| @reference | 定义外键引用 | @reference('class_info','id')        |

>定义**外键引用**详见高级部分

### 字段类型枚举

表字段枚举值与TypeScript基本类型保持一致

| 字段类型枚举       | 描述     |
| ------------------ | -------- |
| ColumnType.PRIMARY | 主键     |
| ColumnType.BOOLEAN | 布尔值   |
| ColumnType.NUMBER  | 数值     |
| ColumnType.STRING  | 字符串   |
| ColumnType.ARRAY   | 数组     |
| ColumnType.DATE    | 日期     |
| ColumnType.ANY     | 任意类型 |

## 如何使用

> *`以上述定义的 student 表为例`*

### `websql-orm` 方法列表

**sqlite.fromSql** `查询表记录，返回记录列表`

``` typescript
var list = await sqlite.fromSql(new student(),
            'select * from student where user_name=? and id=? ',
            ['Tom','guid']);
```

**sqlite.fromSqlFirst** `查询首条表记录，返回首条记录`

``` typescript
var info = await sqlite.fromSqlFirst(new student(),
            'select * from student where user_name=? ',
            ['Tom']);
```

**sqlite.exist** `查询记录是否存在，返回true或false`

``` typescript
var result = await sqlite.exist(new student(),'b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9');
```

**sqlite.insert** `插入记录,返回受影响的行数`

``` typescript
var stu = new student();
stu.id = uid;
stu.user_name = 'Tom';
var result = await sqlite.insert(stu);
```

**sqlite.update** `修改记录,返回受影响的行数`

``` typescript
var info = await sqlite.fromSqlFirst(new student(),
            'select * from student where user_name=? ',
            ['Tom']);
info.user_name = 'Sam'; 
var result = await info.save(); //或者 var result = await sqlite.update(info)
```

**sqlite.query** `查询记录，返回记录列表`

``` typescript
var list = await sqlite.query(new student(),{ user_name:'Tom'});
```

**sqlite.queryFirst** `查询首条记录`

``` typescript
var info = await sqlite.queryFirst(new student(),{ user_name:'Tom'});
```

**sqlite.execSql** `执行sql语句，返回受影响行数`

``` typescript
var result = await sqlite.execSql(new student(),
                'insert into (id,user_name) values (?,?)',
                ['b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9','Tom']);
```

**sqlite.delete** `删除记录`

``` typescript
var delResult = await sqlite.delete(new student(),'291d853d-021b-4a66-9322-9d32eb27eb27');
```

**sqlite.fromSqlByJs** `查询记录(不追踪实体)`

``` typescript
var data:any = await sqlite.fromSqlByJs(dbName,'select * from student where user_name=? ',['Tom'];
```

**sqlite.fromSqlFirstByJs** `查询首条记录(不追踪实体)`

``` typescript
var data:any = await sqlite.fromSqlFirstByJs(dbName,'select * from student where user_name=? ',['Tom']);
```

## 在`javascript`中使用`websql-orm`

### 示例

javascript由于没有装饰器，目前仅提供以下三个方法。

``` js

var sqliteJs= new SqliteJs('db_name');

sqliteJs.fromSql("select * from hero where id = ?", [id]).then(function(result){
    console.log(result);
});

sqliteJs.fromSqlFirst("select * from hero where id = ?", [id]).then(function(result){
    console.log('成功');
});

sqliteJs.execSql("insert into hero (id,name) values (?,?)", [id,name]).then(function(result){
    if (result>0){
        console.log('成功');
    }
});


```

## 高级

### 定义引用

如何定义外键引用？

``` typescript
@database('hero_db','hero')
export class hero extends Table {

    /**主键id */
    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;

    /**姓名 */
    @column(ColumnType.STRING) full_name: string;

    /* ... 省略其它字段定义 ... */

    /**技能 */
    @reference('id', new skill(), 'hero_id') skills: Array<skill>;

}
```

### 示例引用

#### 实体定义

``` typescript
/**
 * 英雄
 */
@database('hero_db','hero')
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
    @reference('id', new skill(), 'hero_id') skills: Array<skill>;

}

/**英雄技能 */
@database('hero_db','skill')
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


/**
 * 血型
 * */
export enum BloodTypeEnum {
    A = 1,
    B = 2,
    AB = 3,
    O = 4,
    OTHER = 5
}
```

#### 实现

``` typescript
import { skill } from './entities/skill';
import { hero } from './entities/hero';
import { sqlite } from "websql-orm";
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

        var _hero = await sqlite.query(new hero(), { id: id });
        console.log("查询英雄:");
        console.log(_hero);

        var __hero = await sqlite.queryFirst(new hero(), { id: id });
        console.log("查询英雄:");
        console.log(__hero);

        var ___hero = await sqlite.fromSqlFirst(new hero(), "select * from hero where id = ?", [id]);
        console.log("查询英雄:");
        console.log(___hero);
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

```
