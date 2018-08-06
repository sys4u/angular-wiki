import { Component, OnInit } from '@angular/core';
import {User} from '../dto/user.model';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser : User;
  constructor(private userService : UserService, private router : Router){
    this.loginUser = {id:'',pw:'',name:'',age:0};
  }
  doLogin(){
    this.userService.doLogin(this.loginUser).subscribe(resp => {
      this.router.navigate(['main',resp['id']]);
    })
  }
}
