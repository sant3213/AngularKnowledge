import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form-component/template-driven-form.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { ReactiveFormValidartorsComponentComponent } from './reactive-form-validartors-component/reactive-form-validartors-component.component';
import { ReactiveFormCrossFieldValidationComponentComponent } from './reactive-form-cross-field-validation-component/reactive-form-cross-field-validation-component.component';
import { WatcherReactiveToChangesComponent } from './watcher-reactive-to-changes/watcher-reactive-to-changes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    TemplateDrivenFormComponent,
    ReactiveFormComponentComponent,
    ReactiveFormValidartorsComponentComponent,
    ReactiveFormCrossFieldValidationComponentComponent,
    WatcherReactiveToChangesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    TemplateDrivenFormComponent,
    ReactiveFormComponentComponent,
    ReactiveFormValidartorsComponentComponent,
    ReactiveFormCrossFieldValidationComponentComponent,
    WatcherReactiveToChangesComponent]
})
export class FormsModuleExample { }
