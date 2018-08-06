import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloMsgService {
  helloMsg = "default hello";
  constructor() { }
}
