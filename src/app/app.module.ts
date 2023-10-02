import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GetInComponent } from './get-in/get-in.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TeamSelectionComponent } from './team-selection/team-selection.component';
import { HomeComponent } from './home/home.component';
import { ConnectWellnessComponent } from './connect-wellness/connect-wellness.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeaderboardComponent,
    GetInComponent,
    LoginComponent,
    RegistrationComponent,
    MyProfileComponent,
    TeamSelectionComponent,
    HomeComponent,
    ConnectWellnessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
