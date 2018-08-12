import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  createBoard (){
    this.router.navigate(['main/createBoard']);
  }
}
