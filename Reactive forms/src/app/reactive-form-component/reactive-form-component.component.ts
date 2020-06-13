import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../Models/user';
@Component({
  selector: 'app-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {
  userForm: FormGroup;
  user = new User();
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl()
    })
  }

  setAllDataFromModel() {
    this.userForm.setValue({
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      age: this.userForm.get('age').value
    })
    console.log(this.userForm.get('firstName').value);
    console.log('To save: ' + JSON.stringify(this.userForm.value));
  }

  setPartDataFromModel(): void {
    this.userForm.patchValue({
      firstName: this.userForm.get('firstName').value
    })
  }
}
