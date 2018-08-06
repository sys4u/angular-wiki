import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginId;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    console.log("==================");
    this.route.params.subscribe(params => {
      console.log(params);
      this.loginId = params.id;
    });

    console.log(this.loginId);
  }

}
