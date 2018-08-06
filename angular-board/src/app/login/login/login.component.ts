import { Component, OnInit } from '@angular/core';
import { User } from '../../dto/user.model';
import {LoginService} from '../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser : User;
  constructor(private loginService : LoginService, private router : Router) {

  }

  ngOnInit() {
    this.loginUser = new User();
  }

  login(){
    this.loginService.login(this.loginUser).subscribe(res => {
      //routing
      this.router.navigate(['main',res['id']]);
    })
  }
}
