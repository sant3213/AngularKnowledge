import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form-component/template-driven-form.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { ReactiveFormValidartorsComponentComponent } from './reactive-form-validartors-component/reactive-form-validartors-component.component';
import { ReactiveFormCrossFieldValidationComponentComponent } from './reactive-form-cross-field-validation-component/reactive-form-cross-field-validation-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponentComponent,
    ReactiveFormValidartorsComponentComponent,
    ReactiveFormCrossFieldValidationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
