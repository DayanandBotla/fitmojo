import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

   myNavMenu = [
    {
      icon: 'icon-bell',
      navText:'Notifications',
      routeTo: 'notifications',
      class:'bell'
    },
    {
      icon: 'icon-leaderboard',
      navText:'Leader board',
      routeTo: 'leader-board',
      class:'leaderboard'
    },
  
    {
      icon: 'icon-user',
      navText:'User info',
      routeTo: 'user-info',
      class:'user'
    },
    {
      icon: 'icon-thumbs-up',
      navText:'Challenges',
      routeTo: 'challenges',
      class:'challenge'
    },
    {
      icon: 'icon-connect2',
      navText:'Opt Fitmojo',
      routeTo: 'optinout',
      class:'connect'
    }
  
  ];
}
