import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  leaderBoardData=[];
  userCurrentRank;

  constructor(
    private apiService:ApiService,
    private userService:UserService
  ){}


  ngOnInit(){
    
    this.getLeaderBoard()
  }

  getLeaderBoard(){
    const userId = this.userService.userId
    this.apiService.getLeaderBoard({
      "userId": userId,
      "summaryType" : "MONTHLY"
  }).subscribe(
      leaderBoardResponse =>{
        this.leaderBoardData = leaderBoardResponse?.leaderBoardList || [];
        this.userCurrentRank = leaderBoardResponse?.userCurrentRank ;
      }
    )
  }

}
