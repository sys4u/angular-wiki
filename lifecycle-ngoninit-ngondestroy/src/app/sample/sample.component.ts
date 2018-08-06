import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'sample-cmp',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, OnDestroy {
  @Input() exContent: string;
  
  constructor() { 
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }
  
  ngOnInit() {
    alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
  }
  
  ngOnDestroy() {
    alert('will be destoryed...');
  }
  
  private chkExistence(val) {
    return val !== undefined;
  }
}