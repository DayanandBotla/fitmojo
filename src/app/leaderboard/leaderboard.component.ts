import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  leaderBoardData = [
    {
      avatar: '1.jpeg',
      name:'Pradeep',
      empid: '1156',
      challengeType: 'Steps',
      scrore:'2344',
      lastUpdated: 'Wed Sep 20 2023 06:04:36'
    },

   
    {
      avatar: '2.jpeg',
      name:'Musheer',
      empid: '1045',
      challengeType: 'Steps',
      scrore:'555',
      lastUpdated: 'Wed Sep 19 2023 09:04:36'
    },
  
    {
      avatar: '3.jpeg',
      name:'Anvesh',
      empid: '1121',
      challengeType: 'Steps',
      scrore:'2001',
      lastUpdated: 'Wed Sep 20 2023 07:04:36'
    },
    {
      avatar: '4.jpeg',
      name:'Daya',
      empid: '1119',
      challengeType: 'Steps',
      scrore:'8978',
      lastUpdated: 'Wed Sep 21 2023 09:04:36'
    },
  
    {
      avatar: '5.jpeg',
      name:'Pradeep',
      empid: '1156',
      challengeType: 'Steps',
      scrore:'2344',
      lastUpdated: 'Wed Sep 20 2023 06:04:36'
    },
    {
      avatar: '6.jpeg',
      name:'Seeta',
      empid: '1045',
      challengeType: 'Steps',
      scrore:'555',
      lastUpdated: 'Wed Sep 19 2023 09:04:36'
    },
    {
      avatar: '7.jpeg',
      name:'Geeta',
      empid: '1099',
      challengeType: 'Steps',
      scrore:'1232',
      lastUpdated: 'Wed Sep 20 2023 09:04:36'

    },
  ];
}
