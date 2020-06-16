import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from '../Models/user';
import { debounceTime } from 'rxjs/operators';
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
  selector: 'app-watcher-reactive-to-changes',
  templateUrl: './watcher-reactive-to-changes.component.html',
  styleUrls: ['./watcher-reactive-to-changes.component.css']
})
export class WatcherReactiveToChangesComponent implements OnInit {

  userForm: FormGroup;
  user = new User();
  passwordMessage: string;

  private validationMessages = {
    required: 'Please enter your password.',
    password: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      phone: '',
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', Validators.required],
      }, {validator: passwordMatcher}),     
      notification: 'email',
      rating: [null, ratingRangeWithParams(1,5)],
      age: { value: '28', disabled: true },
    });

    // Watcher
    this.userForm.get('notification').valueChanges.subscribe( 
      value => this.setNotificaction(value)
    );
    // Password Watcher 
    const passwordControl = this.userForm.get('passwordGroup.password');
    passwordControl.valueChanges.subscribe(
      value => this.setMessage(passwordControl)
    )
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

  setMessage(c: AbstractControl): void {
    this.passwordMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.passwordMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }

}
