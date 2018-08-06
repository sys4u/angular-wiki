import { Component, OnInit, Input } from '@angular/core';
import { LoginService} from '../../service/login/login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  
  @Input() loginId;
  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logout(this.loginId).subscribe(res =>{
      if(res['result']===true){
        alert('logout success');
        this.router.navigate(['']);
      }
    })
  }
}
