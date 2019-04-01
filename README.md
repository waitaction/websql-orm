`websql-orm` 框架，支持 `chrome`、`cordova` 的sqlite数据库读写。

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
import { table, column, ColumnType, Table } from 'websql-orm';

@table("student_db")
export class student extends Table {
    @column(ColumnType.STRING | ColumnType.PRIMARY)
    id: string;
    @column(ColumnType.STRING)
    user_name: string;
}
```
> 1) 装饰器`@table` 定义student表，类名 student 是表名, `student_db` 是数据库名。  
> 2) 装饰器 `@column` 定义列，`ColumnType.STRING` 表示该字段是文本类型  
> 3) 每个表必须拥有一个主键字段，`ColumnType.PRIMARY` 表示该字段为主键字段  
> 4) 每个实体类必须继承 `Table`

### 装饰器说明

| 装饰器名         | 描述                      | 示例                                      |
|-----------------|--------------------------|------------------------------------------|
| @table          | 定义表                    |  @table("student_db")                       |
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
> *`以上述定义的 student 表为例`*

### 示例

``` typescript
import { sqlite } from 'websql-orm';
import { student } from './entity/student';

let data = new test_table1();
data.id = uid;
data.user_name = "Tom";

let rowsAffected = await sqlite.insert(data);

if (rowsAffected > 0){
    let result = await sqlite.fromSql(new student(), 'select * from student where user_name=? ;', ['Tom']);
}
```
> `student` 数据库表  
> 其它方法介绍：略

 
## 优化与建议
websql-orm 目前处于开发阶段，有储多bug和不稳定。  
