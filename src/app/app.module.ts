import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { GetInComponent } from './get-in/get-in.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeaderboardComponent,
    GetInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }