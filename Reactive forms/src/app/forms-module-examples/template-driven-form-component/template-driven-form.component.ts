import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  user = new User();
  
  constructor() { }

  ngOnInit() {
  }

  save(userForm: NgForm){
    console.log(userForm.form)
    console.log('Guardado: ' +JSON.stringify(userForm.value))
  }

}
