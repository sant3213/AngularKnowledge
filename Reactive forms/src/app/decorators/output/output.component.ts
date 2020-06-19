import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  message: string;
  message2: string;
  constructor() {
    this.message="Testing input 1",
    this.message2="Testing input number 2"
   }

  ngOnInit() {
    
  }

}
