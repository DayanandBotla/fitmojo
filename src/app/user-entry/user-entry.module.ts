import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEntryRoutingModule } from './user-entry-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserEntryComponent } from './user-entry.component';
import { SharedFormModule } from '../shared-form/shared-form.module';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UserEntryComponent
  ],
  imports: [
    CommonModule,
    UserEntryRoutingModule,
    SharedFormModule
  ]
})
export class UserEntryModule { }
