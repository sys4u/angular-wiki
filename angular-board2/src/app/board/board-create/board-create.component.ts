import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.css']
})
export class BoardCreateComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  cancelCreation  (){
    this.router.navigate(['main']);
  }
}
