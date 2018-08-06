import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../../dto/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient) { }

  login(loginUser : User){
    return this._http.post("http://demo1290542.mockable.io/login",loginUser);
  }

  logout(loginId){
    return this._http.post("http://demo1290542.mockable.io/logout",loginId);
  }
}
