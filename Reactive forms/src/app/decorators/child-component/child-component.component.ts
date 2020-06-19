import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() messageToShow1: any;
  @Input() messageToShow2: any;

  interpolation:string;
  constructor() { this.interpolation="{{messageToShow}}"}
  
  ngOnInit() {
  }

}
