import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() message1ToChild: any;
  @Input() message2ToChild: any;

  @Output() messageToParent: EventEmitter<string> = new EventEmitter();
  outputMessageToParent= "Message to parent showing"

  interpolation:string;
  constructor() { this.interpolation="{{messageToShow}}"}
  
  ngOnInit() {
  }

  sendMessageToOutput(){
    this.messageToParent.emit(this.outputMessageToParent);
  }

}
