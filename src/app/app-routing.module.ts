import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInComponent } from './get-in/get-in.component';

const routes: Routes = [
  { path: 'get-in', component: GetInComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
