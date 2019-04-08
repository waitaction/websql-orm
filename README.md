`websql-orm` 框架，支持 `typescript` `angular` `cordova` `chrome` 的sqlite数据库读写。

# 开始

`websql-orm` 使用 `TypeScript` 语言编写，使用之前需在 `tsconfig.json` 添加装饰器配置项以启用装饰器特性.

``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```
# 安装
`npm install websql-orm@latest`
>提示：不要安装2.1.0之前的版本，2.1.0之前的版本是调试阶段的版本，无法使用

`cordova plugin add cordova-sqlite-storage`
>若在 cordova项目中，则需要安装cordova插件兼容iOS

# 定义表
如何使用实体类定义一个表?
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
> 1) 装饰器`@database` 定义student表，类名 student 是表名, `student_db` 是数据库名。  
> 2) 装饰器 `@column` 定义列，`ColumnType.STRING` 表示该字段是文本类型  
> 3) 每个表必须拥有一个主键字段，`ColumnType.PRIMARY` 表示该字段为主键字段  
> 4) 每个实体类必须继承 `Table`

### 装饰器说明

| 装饰器名   | 描述                                           | 示例                          |
| ---------- | ---------------------------------------------- | ----------------------------- |
| @database  | 定义表                                         | @database("student_db")       |
| @column    | 定义列                                         | @column(ColumnType.STRING)    |
| @reference | 定义外键引用                                     | @reference('class_info','id') |
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

# 如何使用 
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
var result = await sqlite.exist('b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9');
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
var list = await sqlite.query({ user_name:'Tom'});
```

**sqlite.queryFirst** `查询首条记录`
``` typescript
var info = await sqlite.queryFirst({ user_name:'Tom'});
```

**sqlite.execSql** `执行sql语句，返回受影响行数`
``` typescript
var result = await sqlite.execSql(new student(),
                'insert into (id,user_name) values (?,?)',
                ['b4ce6b51-0bd6-46ee-a5c7-d1d5a93bdee9','Tom']);
```


### 示例

``` typescript
import { sqlite } from 'websql-orm';
import { student } from './entity/student';

export class Demo {
    constructor() {
        var that = this;
        setTimeout(async () => {
            var uid = that.uuid();
            //实体实例
            var data = new student();
            data.id = uid;
            data.user_name = "Tom";
            //插入记录
            var insertResult = await sqlite.insert(data);
            if (insertResult) {
                //使用sql语句查询刚刚插入的记录
                var result = await sqlite.fromSqlFirst(new student(), "select * from student where id=?", [uid]);
                console.log("使用sql语句查询刚刚插入的记录：")
                console.log(result);
                //修改user_name
                result.user_name = "Sam";
                //直接调用save()方法保存
                var saveResult = await result.save();
                if (saveResult) {
                    //使用简易方法查询刚刚保存的记录
                    var info = await sqlite.queryFirst(new student(), { id: uid });
                    console.log("使用简易方法查询刚刚保存的记录：")
                    console.log(info);
                }
            }

            //演示一次性插入多条记录
            var students = new Array<student>();
            
            var stu1 = new student();
            stu1.id = that.uuid();
            stu1.user_name = "David";

            var stu2 = new student();
            stu2.id = that.uuid();
            stu2.user_name = "David";

            students.push(...[stu1, stu2]);

            //插入多条记录
            var insertsResult = await sqlite.insert(students);

            if (insertsResult) {
                //查询返回多条记录
                var stus = await sqlite.query(new student(), { user_name: "David" });
                console.log("使用简易方法查询查询返回多条记录：");
                console.log(stus);
            }
            
        }, 0);
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

```

# 高级

### 定义引用
如何定义外键引用？
``` typescript
import { table, column, ColumnType, Table } from 'websql-orm';

/*班级信息表*/
@database("student_db")
export class class_info extends Table {
    @column(ColumnType.PRIMARY | ColumnType.STRING)
    id: string;
    @column(ColumnType.STRING)
    name: string;
}

/*学生信息表*/
@database("student_db")
export class student extends Table {

    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;

    @column(ColumnType.STRING)
    user_name: string;
    
    /*定义外键，引用班级信息表*/
    @reference("class_info", "id")
    class_id:string;
}
```

查询外键引用的外表数据
``` typescript
    var stu = await sqlite.fromSqlFirst(new student(), "select * from student where id=?", [uid]);
    var refData = await stu.getRefData(new class_info());
    console.log(refData);
```
