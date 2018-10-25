import { user } from "./model/user";

export class Demo {
    constructor() {

    }

    /**测试创建或保存记录 */
    testCreate() {
        let u: user = new user();
        u.id = "guid";
        u.user_name = "小明";
        u.password = "123456";
        u.save();
    }

    runTest(){
        this.testCreate();
    }
}

let demo = new Demo();
demo.runTest();