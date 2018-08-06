import { Component, OnInit, Input } from '@angular/core';
import {User} from '../dto/user.model';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Input() loginId;
  constructor(private userService : UserService, private router : Router) { }

  doLogout(){
    this.userService.doLogout(this.loginId).subscribe(resp => {
      console.log(resp);
      if(resp['result'] === true){
        alert('logout');
        this.router.navigate(['']);
      }
    })
  }
}
