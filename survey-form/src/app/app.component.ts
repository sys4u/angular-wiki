import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
role = "tutee";
name ="";

 changeName(name){
  this.name = name;
 }
}
