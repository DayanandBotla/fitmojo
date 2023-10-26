import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { ConnectWellnessComponent } from './connect-wellness/connect-wellness.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterGuardService } from './router-guard.service';


const routes: Routes = [
  {
    path: '', redirectTo:"login", pathMatch:"full"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', 
    component: HomeComponent,
    canActivate: [RouterGuardService],
  },
  {
    path: 'challenges', 
    component: HomeComponent,
    canActivate: [RouterGuardService],
  },
  {
    path: 'register', component: RegistrationComponent
  },
  { 
    path: '**', redirectTo: "login", pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
