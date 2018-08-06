import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './dto/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public _http:HttpClient) {
  }

  doLogin(loginUser : User){
    console.log(loginUser);
    return this._http.post("http://demo1290542.mockable.io/login", loginUser);
  }

  doLogout(loginId){
    console.log(loginId);
    return this._http.post("http://demo1290542.mockable.io/logout", loginId);
  }
}
