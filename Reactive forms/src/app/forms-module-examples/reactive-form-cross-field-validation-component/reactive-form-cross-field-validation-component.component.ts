import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

// ***** Cross Field validation *******////
function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  const passwordControl = c.get('password');
  const confirmControl = c.get('confirmPassword');

  // To prevent an error appear when the user hasn´t touch the fields
  if(passwordControl.pristine || confirmControl.pristine){
    return null;
  }

  if(passwordControl.value == confirmControl.value) {
    return null;
  }
  return {'match':true};
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
  selector: 'app-reactive-form-cross-field-validation-component',
  templateUrl: './reactive-form-cross-field-validation-component.component.html',
  styleUrls: ['./reactive-form-cross-field-validation-component.component.css']
})
export class ReactiveFormCrossFieldValidationComponentComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: '',
      passwordGroup: this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
      }, {validator: passwordMatcher}),     
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
