# Introduce

`websql-orm` framework，support `typescript` `angular` `cordova` `chrome` sqlite database.

[![npm](https://badgen.net/npm/v/websql-orm)](https://www.npmjs.com/package/websql-orm)
[![install size](https://badgen.net/packagephobia/install/websql-orm)](https://packagephobia.now.sh/result?p=websql-orm)
[![downloads](https://badgen.net/npm/dt/websql-orm)](https://www.npmjs.com/package/websql-orm)

[中文文档](README-CN.md)

## Usage

`websql-orm` use `TypeScript` language, needs to be in before using `tsconfig.json` add a decorator configuration items to enable the decorator features.

``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

## Installation

`npm install websql-orm@latest`
>Tip: do not install a version prior to 2.1.0. The version prior to 2.1.0 is the debug version and cannot be used.

`cordova plugin add cordova-sqlite-storage`
>Tip: In the cordova project, you need to install the cordova plugin.

``` typescript
import { EnvConfig } from 'websql-orm';

EnvConfig.useCordovaSqliteStorage = true;
```

## Enable Debug log

``` typescript
import { EnvConfig } from 'websql-orm';

EnvConfig.enableDebugLog = true;
```

## Other Config

``` typescript
import { EnvConfig } from 'websql-orm';
// 时间移除毫秒
EnvConfig.dateFormatRemoveMillisecond = true;

````

## Define table

How do I define a table using an entity class?

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

> 1) Decorator `@database` definition student table, the name of the class student is the name of the table, `student_db` is the database name.
> 2) Decorator `@column` definition column, `ColumnType.STRING` define text type.
> 3) Each table must have a PRIMARY key field, `ColumnType.PRIMARY` define the PRIMARY key field.
> 4) Each entity class must inherit `Table`.

### Decorator description

| Decorator name | Description                   | Sample                            |
| -------------- | ----------------------------- | --------------------------------- |
| @database      | Define table                  | @database("db_name","table_name") |
| @column        | Define column                 | @column(ColumnType.STRING)        |
| @reference     | Define foreign key references | @reference('class_info','id')     |

>Define **foreign key reference** see advanced section

### Field type enumeration

Table field enumeration values are consistent with TypeScript primitive types.

| Field type enumeration | Description |
| ---------------------- | ----------- |
| ColumnType.PRIMARY     | Primary key |
| ColumnType.BOOLEAN     | boolean     |
| ColumnType.NUMBER      | number      |
| ColumnType.STRING      | string      |
| ColumnType.ARRAY       | Array       |
| ColumnType.DATE        | Date        |
| ColumnType.ANY         | any         |

## How to use

> *Take the `student` table defined above as an example*

### `websql-orm` Methods list

**sqlite.fromSql** `Query the table record and return a list of records`

``` typescript
var list = await sqlite.fromSql(new student(),
            'select * from student where user_name=? and id=? ',
            ['Tom','guid']);
```

**sqlite.fromSqlFirst** `Query the first table record and return the first record`

``` typescript
var info = await sqlite.fromSqlFirst(new student(),
            'select * from student where user_name=? ',
            ['Tom']);
```

**sqlite.exist** `Querying for the existence of a record returns true or false`

``` typescript
var result = await sqlite.exist(new student(),'b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9');
```

**sqlite.insert** `Inserts a record, returning the number of rows affected`

``` typescript
var stu = new student();
stu.id = uid;
stu.user_name = 'Tom';
var result = await sqlite.insert(stu);
```

**sqlite.update** `Modify the record to return the number of rows affected`

``` typescript
var info = await sqlite.fromSqlFirst(new student(),
            'select * from student where user_name=? ',
            ['Tom']);
info.user_name = 'Sam';
var result = await info.save(); // var result = await sqlite.update(info)
```

**sqlite.query** `Query records and return a list of records`

``` typescript
var list = await sqlite.query(new student(),{ user_name:'Tom'});
```

**sqlite.queryFirst** `Query the first record`

``` typescript
var info = await sqlite.queryFirst(new student(),{ user_name:'Tom'});
```

**sqlite.execSql** `Execute the SQL statement and return the number of affected rows`

``` typescript
var result = await sqlite.execSql(new student(),
                'insert into (id,user_name) values (?,?)',
                ['b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9','Tom']);
```

**sqlite.delete** `Delete records`

``` typescript
var delResult = await sqlite.delete(new student(),'291d853d-021b-4a66-9322-9d32eb27eb27');
```

**sqlite.fromSqlByJs** `Query records (not tracking entities)`

``` typescript
var data:any = await sqlite.fromSqlByJs(dbName,'select * from student where user_name=? ',['Tom']);
```

**sqlite.fromSqlFirstByJs** `Query the first record (not track entity)`

``` typescript
var data:any = await sqlite.fromSqlFirstByJs(dbName,'select * from student where user_name=? ',['Tom']);
```

## Use `websql-orm` in `javascript`

### 示例

Javascript, with no decorator, currently provides only three methods.

``` js

var sqliteJs= new SqliteJs('db_name');

sqliteJs.fromSql("select * from hero where id = ?", [id]).then(function(result){
    console.log(result);
});

sqliteJs.fromSqlFirst("select * from hero where id = ?", [id]).then(function(result){
    console.log('successful');
});

sqliteJs.execSql("insert into hero (id,name) values (?,?)", [id,name]).then(function(result){
    if (result>0){
        console.log('successful');
    }
});

```

## Advanced

### Define the reference

How do I define a foreign key reference?

``` typescript
@database('hero_db','hero')
export class hero extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;

    @column(ColumnType.STRING) full_name: string;

    /* ... Omit other field definitions ... */

    @reference('id', new skill(), 'hero_id') skills: Array<skill>;
}
```

### The sample

#### Entities defined

``` typescript

@database('hero_db','hero')
export class hero extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;

    @column(ColumnType.STRING) full_name: string;

    @column(ColumnType.NUMBER) age: number;

    @column(ColumnType.BOOLEAN) is_girl: boolean;

    @column(ColumnType.DATE) join_time: Date;

    @column(ColumnType.ANY) body_data: { stature: number, blood_type: BloodTypeEnum };

    @reference('id', new skill(), 'hero_id') skills: Array<skill>;

}

@database('hero_db','skill')
export class skill extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY) id: string;

    @column(ColumnType.STRING) name: string;

    @column(ColumnType.STRING) descript: string;

    @column(ColumnType.NUMBER) harm: number;

    @column(ColumnType.STRING) hero_id:string;
}

export enum BloodTypeEnum {
    A = 1,
    B = 2,
    AB = 3,
    O = 4,
    OTHER = 5
}
```

#### The sample

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

    async addHero() {

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

        await this.addSkills();
    }


    async addSkills() {

        let lvbu_skill = new skill();
        lvbu_skill.id = this.uuid();
        lvbu_skill.name = "方天画斩";
        lvbu_skill.descript = "方天画斩是吕布第一伤害技能";
        lvbu_skill.harm = 76;
        lvbu_skill.hero_id = this.lvbu_id;

        let liubei_skill = new skill();
        liubei_skill.id = this.uuid();
        liubei_skill.name = "以德服人";
        liubei_skill.descript = "刘备清除身上的控制效果，并获得护盾，护盾存在期间刘备免疫控制";
        liubei_skill.harm = 50;
        liubei_skill.hero_id = this.liubei_id;

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

    async deleteHero(id: string) {
        let delResult = await sqlite.delete(new hero(), id);
        if (!delResult) {
            console.warn(`删除英雄${id}失败`);
        } else {
            console.log(`删除英雄${id}成功`);
        }
    }

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

    async updateHero(id) {
        var _hero = await sqlite.queryFirst(new hero(), { id: id });
        _hero.join_time = new Date();
        await _hero.save();
        console.log("修改英雄");
    }

    async queryHeros() {
        var heros = await sqlite.fromSql(new hero(), "select * from hero", []);
        console.log("查询所有英雄:");
        console.log(heros);
    }

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

## License

Copyright (c) 2019, Sam Chen. (ISC License)
