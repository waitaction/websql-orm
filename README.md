`websql-orm` framework，support `typescript` `angular` `cordova` `chrome` sqlite database.

[![npm](https://badgen.net/npm/v/websql-orm)](https://www.npmjs.com/package/websql-orm)
[![install size](https://badgen.net/packagephobia/install/websql-orm)](https://packagephobia.now.sh/result?p=websql-orm)
[![downloads](https://badgen.net/npm/dt/websql-orm)](https://www.npmjs.com/package/websql-orm)

[中文文档](README-CN.md)
# Usage

`websql-orm` use `TypeScript` language, needs to be in before using `tsconfig.json` add a decorator configuration items to enable the decorator features.

``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```
# Installation
`npm install websql-orm@latest`
>Tip: do not install a version prior to 2.1.0. The version prior to 2.1.0 is the debug version and cannot be used.

`cordova plugin add cordova-sqlite-storage`
>Tip: In the cordova project, you need to install the cordova plugin that is compatible with iOS.

# Define table
How do I define a table using an entity class?
``` typescript
import { table, column, ColumnType, Table } from 'websql-orm';

@database("student_db")
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

| Decorator name   | Description                              | Sample                          |
| ---------- | ---------------------------------------------- | ----------------------------- |
| @database  | Define table                                   | @database("student_db")       |
| @column    | Define column                                  | @column(ColumnType.STRING)    |
| @reference | Define foreign key references                  | @reference('class_info','id') |
>Define **foreign key reference** see advanced section

### Field type enumeration

Table field enumeration values are consistent with TypeScript primitive types.

| Field type enumeration  | Description         |
| ------------------ | ------------------------ |
| ColumnType.PRIMARY | Primary key              |
| ColumnType.BOOLEAN | boolean                  |
| ColumnType.NUMBER  | number                   |
| ColumnType.STRING  | string                   |
| ColumnType.ARRAY   | Array                    |
| ColumnType.DATE    | Date                     |
| ColumnType.ANY     | any                      |

# How to use 
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
var result = await sqlite.exist('b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9');
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
var list = await sqlite.query({ user_name:'Tom'});
```

**sqlite.queryFirst** `Query the first record`
``` typescript
var info = await sqlite.queryFirst({ user_name:'Tom'});
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


### The sample

``` typescript
import { sqlite } from 'websql-orm';
import { student } from './entity/student';

export class Demo {
    constructor() {
        var that = this;
        setTimeout(async () => {
            var uid = that.uuid();
        
            var data = new student();
            data.id = uid;
            data.user_name = "Tom";
            //Insert records
            var insertResult = await sqlite.insert(data);
            if (insertResult) {
                //Use the SQL statement to query the record just inserted
                var result = await sqlite.fromSqlFirst(new student(), "select * from student where id=?", [uid]);
                console.log("Use the SQL statement to query the record just inserted：")
                console.log(result);
                //Modify the user_name.
                result.user_name = "Sam";
                //Call the save() method directly to save
                var saveResult = await result.save();
                if (saveResult) {
                    //Use a simple method to query the record you just saved
                    var info = await sqlite.queryFirst(new student(), { id: uid });
                    console.log("Use a simple method to query the record you just saved：")
                    console.log(info);
                }
            }

            //Demonstrates inserting multiple records at once
            var students = new Array<student>();
            
            var stu1 = new student();
            stu1.id = that.uuid();
            stu1.user_name = "David";

            var stu2 = new student();
            stu2.id = that.uuid();
            stu2.user_name = "David";

            students.push(...[stu1, stu2]);

            //Insert multiple records
            var insertsResult = await sqlite.insert(students);

            if (insertsResult) {
                //The query returns multiple records
                var stus = await sqlite.query(new student(), { user_name: "David" });
                console.log("A simple query returns multiple records：");
                console.log(stus);
            }
            
        }, 0);
    }

    /**
     * Generate pseudo guid
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

```

# Advanced

### Define the reference
How do I define a foreign key reference?
``` typescript
import { table, column, ColumnType, Table } from 'websql-orm';

/*The school class information sheet*/
@database("student_db")
export class class_info extends Table {
    @column(ColumnType.PRIMARY | ColumnType.STRING)
    id: string;
    @column(ColumnType.STRING)
    name: string;
}

/*Student information sheet*/
@database("student_db")
export class student extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;

    @column(ColumnType.STRING)
    user_name: string;
    
    /*Define a foreign key that references the student class information table*/
    @reference("class_info", "id")
    class_id:string;
}
```

Query the referenced data
``` typescript
var stu = await sqlite.fromSqlFirst(new student(), "select * from student where id=?", [uid]);
var refData = await stu.getRefData(new class_info());
console.log(refData);
```
## License
Copyright (c) 2019, Sam Chen. (ISC License)