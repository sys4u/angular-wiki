import { Component } from '@angular/core';
import { HelloMsgService } from './hello-msg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public helloMsgService : HelloMsgService) { }
  changeHelloMsg(message){
    this.helloMsgService.helloMsg = message;
  }
  getHelloMsg(){
    return this.helloMsgService.helloMsg;
  }
}
