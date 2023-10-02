import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserEntryComponent } from './user-entry.component';

const routes: Routes = [
  { 
    path: '',  
    component: UserEntryComponent,
    children: [
      {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full' 
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegistrationComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserEntryRoutingModule { }
