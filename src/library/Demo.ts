QUnit.test("web sqlite实体框架单元测试", async (assert) => {
    var entity = new Entity("TestDb");

    //初始化实体框架
    entity.init(user);
    assert.ok(true, "初始化并创建表通过!");

    //插入数据
    var u = new user();
    u.id = "abc";
    u.name = "单条数据";
    var insertResult = await entity.insertData(u);
    if (insertResult) {
        assert.ok(true, "插入表记录通过!");
    } else {
        assert.notOk(false, "插入表记录失败!");
    }
    //插入多条数据
    var us = new Array<user>();
    for (var index = 0; index < 10; index++) {
        var _u = new user();
        _u.id = "id" + index;
        _u.name = "name" + index;
        us.push(_u);
    }
    insertResult = await entity.insertDatas(us);
    if (insertResult) {
        assert.ok(true, "插入多条记录通过!");
    } else {
        assert.notOk(false, "插入多条记录失败!");
    }

    //查询数据
    var _u2 = new user();
    _u2.id = "id1";
    var _uresult = await entity.where(_u2).getData();
    console.log(_uresult);
    if (_uresult != null && _uresult.length > 0) {
        assert.ok(true, "查询记录通过!");
    } else {
        assert.ok(false, "查询记录失败!");
    }
    _u2.name = "被修改了"
    //修改数据
    var updateResult = await entity.where({ id: _u2.id }).updateData(_u2);
    console.log(updateResult);
    if (updateResult) {
        assert.ok(true, "更新记录通过!");
    } else {
        assert.ok(false, "更新记录失败!");
    }
    //删除数据
    var deleteResult = await entity.where({ id: _u2.id }).deleteData();
    if (deleteResult) {
        assert.ok(true, "删除记录通过!");
    } else {
        assert.ok(false, "删除记录失败!");
    }
});
