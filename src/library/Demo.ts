QUnit.test("web sqlite实体框架单元测试", async (assert) => {
    var entity = new Entity("TestDb");

    //初始化实体框架
    entity.init("TestTable", [
        { name: 'id', type: 'char(36) NOT NULL' },
        { name: 'title', type: 'varchar(255) DEFAULT NULL' }
    ]);
    entity.Initial<user>();
    assert.ok(true, "初始化并创建表通过!");

    //插入数据
    var insertResult = await entity.insertData([{ id: "afdafdas", title: "ccccccc" }]);
    if (insertResult) {
        assert.ok(true, "插入表记录通过!");
    }else{
        assert.notOk(true, "插入表记录失败!");
    }

});
