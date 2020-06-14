import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { UserValidation } from '../Models/userValidation';

// **** Custom Validator *****
function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { 'range': true };
  }
  return null
}
// **** Custom Validator with factory function *****
function ratingRangeWithParams(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null =>{
    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    }
    return null
  }
}
@Component({
  selector: 'app-reactive-form-validartors-component',
  templateUrl: './reactive-form-validartors-component.component.html',
  styleUrls: ['./reactive-form-validartors-component.component.css']
})
export class ReactiveFormValidartorsComponentComponent implements OnInit {
  userForm: FormGroup;
  user = new UserValidation();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: '',
      notification: 'email',
      rating: [null, ratingRangeWithParams(1,5)],
      age: { value: '28', disabled: true },
    });
  }

  setAllDataFromModel() {
    this.userForm.setValue({
      firstName: this.userForm.get('firstName').value,
      lastName: this.userForm.get('lastName').value,
      email: this.userForm.get('email').value,
      phone: this.userForm.get('phone').value,
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

  // ***** Adjusting Validation Rules at Runtime. *****
  // When the user click  email the phone is optional when click 
  // the text radio button phone number becomes required
  setNotificaction(notifyVia: string): void {
    const phoneControl = this.userForm.get('phone');
    if (notifyVia == 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
