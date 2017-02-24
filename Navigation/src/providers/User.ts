import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class UserData {

  constructor(public http: Http) { }

  sendMessage(chatMessage, handler: Function) {
    var response: JSON;
    var headers = new Headers();
    headers.append("Content-Type", 'application/json;charset=utf-8');
    headers.append("Authorization", 'Bearer f1f6f36657ef4b9fa6edaa68dc52048b')
    var body = {
      query: [chatMessage],
      lang: "en",
      sessionId: 45
    }


    this.http.post("https://api.api.ai/v1/query?v=20150910",
      body, {
        headers: headers
      }).subscribe(data => {
        //console.log(data.json());

        // console.log(data.json());
        //console.log(JSON.stringify(data.json()));
        response = data.json()['result']['fulfillment']['speech'];
        //  response = JSON.parse(data.text());


        handler(response);
      },
      () => console.log("error")
      );
  }

}
