# websql-orm

websql-orm 框架，用于chrome内核浏览器、nodejs、cordova 对sqlite数据库的操作

使用之前需在tsconfig.json添加装饰器配置项以启用装饰器特性

``` json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

## 定义表
如何使用实体类定义一个表？
``` typescript
@table("student_db")
class user extends BaseMetadata {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    public id: string;
    @column(ColumnType.STRING )
    public user_name: string;
    @column(ColumnType.STRING )
    public password: string;
}
```
> 1) 装饰器 `@table` 定义类user为表实体，类别user是表名，@table("`student_db`") 参数 `student_db` 表示数据库名。  
> 2) 装饰器 `@column` 定义列，`ColumnType` 枚举列字段类型  
> 3) 每个表必须拥有一个主键字段，将添加`ColumnType.PRIMARY`则表示该字段为主键字段  
> 4) 每个实体类必须继承`BaseMetadata`

### 装饰器说明

| 装饰器名         | 描述                         | 示例                                      |
|-----------------|-----------------------------|------------------------------------------|
| @table          | 用于定义表                    |  @table("student")                       |
| @column         | 用于定义列                    |  @column(ColumnType.STRING)              |

### 列字段类型枚举

列字段枚举值与TypeScript基本类型保持一致，websql-orm框架会自动识别和转换

| 字段类型枚举名             | 描述                         | 
|-------------------------|-----------------------------|
| ColumnType.PRIMARY      | 主键                         |
| ColumnType.BOOLEAN      | 布尔值                       | 
| ColumnType.NUMBER       | 数值                         |
| ColumnType.STRING       | 字符串                       | 
| ColumnType.ARRAY        | 数组                         |
| ColumnType.DATE         | 日期                         | 
| ColumnType.ANY          | 任意类型                      | 

## 操作数据库数据

### 从数据表查询记录

``` typescript
let list   = user.query(m=>m.name=="xiaoming");
let result = user.queryFirst(m=>m.id=="test");
```
> `user` 是定义的表实体类。  
> `query` 与 `queryFirst` 是静态方法

### 往数据表 添加/修改 记录

``` typescript
let u:user  = new user();
u.id        = "guid";
u.user_name = "小明";
u.password  = "123456";
u.save();
```

当表数据是json时，则可以使用静态方法 `import` 导入记录，导入后会返回 `user` 的实例对像.  
然后再调用 `save` 实例方法 添加/更新 数据.

``` typescript
user.import({
    id        :"guid",
    user_name :"小明",
    password  :"123456"
}).save();

```

### 从数据表删除记录
调用 `delete` 静态方法表删除记录
``` typescript
let result:boolean = user.delete( m => m.id == "test" ); 
```

## 优化与建议
websql-orm 目前仍处于开发阶段，有储多bug和不稳定。  
如果有优化和改进的建议，可发邮件给我。  
我的邮件是 350561378@qq.com