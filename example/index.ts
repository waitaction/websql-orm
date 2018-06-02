import { user } from "./user";
import { entity } from "../src/decorators/entity";

export class demo {
    constructor() {
        //  let _user = new user();
        //  _user.id = "abc";
          this.query();
        //this.insert().then();
    }
    async insert() {
        let _user = new user();
        _user.id = "iiiiiddddd";
        _user.name = "xixixixixixi";
        let insertResult = await entity(user).insert(_user);
    }
    update() {

    }
    delete() {

    }
    async query() {
        let result1 = await user.queryFirst((m: user) => m.id == "iiiiiddddd");
        // let result1 = await entity(user).queryFirst(m => m.id == "iiiiiddddd");
        console.log("查询表user第一条数据:");
        console.log(result1);
        // 查询到的数据，修改，然后保存
        result1.name = "修改后的记录";
        result1.save();

        // let result1 = entity<user>.first(m => m.id == "guid").result();
        // let result2 = entity<user>.where(m => m.user_name.indexOf("小明") >= 0).toArray();
    }
}
new demo();