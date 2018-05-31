import { user } from "./user";
import { entity } from "../src/decorators/entity";

export class demo {
    constructor() {
        let _user = new user();
        _user.id = "abc";
        //  this.query();
        this.insert().then();
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
    query() {
        let result1 = entity(user).first(m => m.id == "guid");
        // let result1 = entity<user>.first(m => m.id == "guid").result();
        // let result2 = entity<user>.where(m => m.user_name.indexOf("小明") >= 0).toArray();
    }
}
new demo();