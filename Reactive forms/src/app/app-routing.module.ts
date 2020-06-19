import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutputComponent } from './decorators/output/output.component';
import { ShowFormsComponent } from './forms-module-examples/show-forms/show-forms.component';


const routes: Routes = [
  {path:'', component: ShowFormsComponent},
  { path:'decorators', component: OutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
