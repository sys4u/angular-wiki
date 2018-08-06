import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-person-info-form',
  templateUrl: './person-info-form.component.html',
  styleUrls: ['./person-info-form.component.css']
})
export class PersonInfoFormComponent{
  @Input() role;
  @Output() onChangeName = new EventEmitter<String>();

  constructor() { }

  changeName(name){
    this.onChangeName.emit(name);
  }

}
