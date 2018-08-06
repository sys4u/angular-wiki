import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  parentToChildTitle;
  @Output() onChangeChildData = new EventEmitter<String>();

  changeChildData(inputTitle){
    console.log("child component");
    this.onChangeChildData.emit(inputTitle);
  }

  constructor() { }

  ngOnInit() {
  }

}
