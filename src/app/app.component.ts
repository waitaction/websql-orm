import { sqlite } from './../sqlite';
import { Component } from '@angular/core';
import { test_table } from 'src/test/test_table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    setTimeout(async () => {
      var testData = new test_table();
      testData.id = "19";
      testData.password = "123455";
      testData.user_name = "xiaoming";
      //var result = await sqlite.insert<test_table>(testData);

      var datas = await sqlite.fromSql<test_table>(new test_table(),"select * from test_table where id=?;", ["19"]);
      if (datas != null && datas.length > 0) {
        console.log(datas);

      }

    }, 0);
  }
}
