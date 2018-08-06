import { Component, OnInit } from '@angular/core';
import { HelloMsgService } from '../hello-msg.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(public helloMsgService : HelloMsgService) { }

  ngOnInit() {
  }
  getHelloMsg(){
    return this.helloMsgService.helloMsg;
  }
}
