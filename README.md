# websql-orm

websql-orm框架，用于chrome内核浏览器、nodejs、cordova对sqlite的操作

该框架使用TypeScript语言编写，使用之前需在tsconfig.json添加装饰器配置项以启用装饰器特性

``` json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

## 定义数据库

``` typescript
@Database()
export class StudentDb{

}
```

装饰器@Database用于定义数据库，StudentDb则为数据库名。

## 定义表

``` typescript
@Table()
class user {
    @Column("char(36) NOT NULL")
    public id: string;
    @Column("varchar(255) DEFAULT NULL")
    public user_name: string;
    @Column("varchar(255) DEFAULT NULL")
    public password: string;
}
```

装饰器@Table用于定义表，user则为该表的表名，字段id、user_name、password是user表的列名。如果你有多个表，那么你需要定义多个@Table装饰器的类。

## 操作数据库数据

### 从数据表查询记录

``` typescript
let result1 = entity<user>.first(m=>m.id=="guid").result();
let result2 = entity<user>.where(m=>m.user_name.indexOf("小明")>=0).toArray();
```

### 往数据表添加一条记录

``` typescript
let mUser:user = {
    id:"guid",
    user_name:"小明",
    password:"123456"
}
let result = await entity<user>.insert(mUser);
```

### 从数据表删除记录

``` typescript
let delResult1:boolean = entity<user>.first(m=>m.id=="guid").delete();
let delResult2:boolean = entity<user>.where(m=>m.user_name.indexOf("小明")>=0).delete();
```

### 从数据表修改记录

``` typescript
let data1 = entity<user>.first(m=>m.id=="guid");
data1.user_name = "小强";
data1.update();
```

### 装饰器说明

| 装饰器名         | 描述                         | 示例                                      |
|-----------------|------------------------------|-------------------------------------------|
| @table          | 用于定义表                    |  @table("student")                        |
| @column         | 用于定义列                    |  @column("number")                        |

## 源代码说明

    src/Decorators 装饰器相关

## 优化与建议
如果有对websql-orm的优化和建议，可发邮件给我。
我的邮件是 350561378@qq.com
同时也可以添加我微信，我的微信号是350561378