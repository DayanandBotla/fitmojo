import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetInComponent } from './get-in/get-in.component';

const routes: Routes = [
  { 
    path: 'get-in', 
    loadChildren: () => import('./user-entry/user-entry.module').then(m => m.UserEntryModule),
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
