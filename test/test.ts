import { test_table1 } from "./test_table";
import { sqlite } from "../src/sqlite";

export class test {
    constructor() {
        var that = this;
        setTimeout(async () => {
            var uid = that.uuid();
            //写入数据
            var data = new test_table1();
            data.id = uid;
            data.user_name = "Sam";
            var ires = await sqlite.insert(data);
            if (ires) {
                console.log("写入数据成功");
                var results = await sqlite.fromSql(new test_table1(), "select * from test_table1 where id=?", [uid]);
                var result = results[0];
                console.log(result);
                result.user_name = "Sam2";
                var ures = await sqlite.update(result);
                if (ures) {
                    console.log("修改记录成功");
                } else {
                    console.warn("修改记录失败");
                }
            } else {
                console.warn("写入数据失败");
            }

            var dataList = new Array<test_table1>();
            var t1 = new test_table1();
            t1.id = that.uuid();
            t1.user_name = that.uuid();
            var t2 = new test_table1();
            t2.id = that.uuid();
            t2.user_name = that.uuid();
            dataList.push(...[t1, t2]);
            var rowa = await sqlite.insert(dataList);
            console.log(rowa);
        }, 0);
    }

    /**
     * 生成伪guid
     */
    public uuid(): string {
        let s: any[] = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        // tslint:disable-next-line:no-bitwise
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        let uuid = s.join("");
        return uuid;
    }
}
new test();