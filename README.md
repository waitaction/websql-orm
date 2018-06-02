`websql-orm` 框架，支持 `chrome`、`nodejs`、`cordova` 的sqlite数据库读写。

# 开始

`websql-orm` 使用 `TypeScript` 语言编写，使用之前需在 `tsconfig.json` 添加装饰器配置项以启用装饰器特性.

``` json
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

# 定义表
如何使用实体类定义一个表?
``` typescript
@table("student_db")
export class user extends BaseMetadata {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
    @column(ColumnType.STRING ) 
    password: string;
}
```
> 1) 装饰器`@table` 定义user表，关键字user是表名, `student_db` 是数据库名。  
> 2) 装饰器 `@column` 定义列，`ColumnType.STRING` 表示该字段是文本类型  
> 3) 每个表必须拥有一个主键字段，`ColumnType.PRIMARY` 表示该字段为主键字段  
> 4) 每个实体类必须继承 `BaseMetadata`

### 装饰器说明

| 装饰器名         | 描述                      | 示例                                      |
|-----------------|--------------------------|------------------------------------------|
| @table          | 定义表                    |  @table("student")                       |
| @column         | 定义列                    |  @column(ColumnType.STRING)              |

### 字段类型枚举

表字段枚举值与TypeScript基本类型保持一致，websql-orm 会自动识别和转换

| 字段类型枚举              | 描述                         | 
|-------------------------|-----------------------------|
| ColumnType.PRIMARY      | 主键                         |
| ColumnType.BOOLEAN      | 布尔值                       | 
| ColumnType.NUMBER       | 数值                         |
| ColumnType.STRING       | 字符串                       | 
| ColumnType.ARRAY        | 数组                         |
| ColumnType.DATE         | 日期                         | 
| ColumnType.ANY          | 任意类型                      | 

# 操作数据库数据 
> *`以上述定义的 user 表为例`*

### 从数据表查询记录

``` typescript
let list   = user.query( m => m.name == "xiaoming" );
let result = user.queryFirst( m => m.id == "test" );
```
> `user` 数据库表  
> `query` 与 `queryFirst` 是静态方法

### 往数据表 添加/修改 记录

``` typescript
let u:user  = new user();
u.id        = "guid";
u.user_name = "小明";
u.password  = "123456";
u.save();
```

当数据是json时，则使用静态方法 `import` 导入记录，导入后会返回 `user` 的实例对像.  
然后调用 `save` 实例方法 `添加/更新` 数据.

``` typescript
user.import({
    id        :"guid",
    user_name :"小明",
    password  :"123456"
}).save();
```

### 从数据表删除记录
调用 `delete` 静态方法删除记录
``` typescript
let result:boolean = user.delete( m => m.id == "test" ); 
```

## 优化与建议
websql-orm 目前处于开发阶段，有储多bug和不稳定。  
如果有优化和改进的建议，可发邮件给我。  
我的邮件是 `350561378@qq.com`