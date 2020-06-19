import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutputComponent } from './output/output.component';
import { ChildComponentComponent } from './child-component/child-component.component';



@NgModule({
  declarations: [ OutputComponent, ChildComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OutputComponent,
    ChildComponentComponent]
})
export class DecoratorsModule { }
