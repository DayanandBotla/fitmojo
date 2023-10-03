import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() isUserIntegrationOpen;

  userId;
  constructor(
    private apiService:ApiService,
    private userService:UserService
  ){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isUserIntegrationOpen']) {
      this.isUserIntegrationOpen = changes['isUserIntegrationOpen'].currentValue;
    }
  }

  ngOnInit(){
    this.getLeaderBoard();
    
  }

  getLeaderBoard(){
    this.userId = this.userService.userId
    this.apiService.getLeaderBoard({
        "userId": this.userId,
        "summaryType" : "MONTHLY"
    }).subscribe(
      leaderBoardResponse =>{
        this.leaderBoardData = leaderBoardResponse?.leaderBoardList || [];
        this.userCurrentRank = leaderBoardResponse?.userCurrentRank ;
      },
      
    )
  }

  onImgError(event:any){
    event.target.src = '../assets/img/no-img.jpeg'
    
   }

}
