# TypeScript orm框架(sqlite) 
适用于chrome内核浏览器
引入Entity
修改 tsconfig.json
``` json
{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```


### 定义实体类
例如你有一个表，表名user，字段有 id ，user_name，password


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

### 初始实体
``` typescript
var entity = new Entity("TestDb");
//初始化实体,此时会自动创建不存在的表
entity.init(user);
```
### 插入记录
``` typescript
//插入数据
var u = new user();
u.id = "dac9e8fb-5a5e-47e0-ae36-2b77fe6a6df7";
u.user_name = "小明";
//往user数据表插入一条数据
let result = await entity.insertData(u);
```
### 查询记录
``` typescript
//查询记录
let result = await entity.where({id:"dac9e8fb-5a5e-47e0-ae36-2b77fe6a6df7"}).getData(); 
```
### 修改记录
``` typescript
let result = await entity.where({ id: ""dac9e8fb-5a5e-47e0-ae36-2b77fe6a6df7"" }).updateData(u);
```
相关TypeScript知识，请参考TypeScript文档:https://www.tslang.cn/
