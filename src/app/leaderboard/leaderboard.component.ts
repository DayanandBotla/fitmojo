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
  leaderBoardInterval
  userId;
  leaderBoardType = "MONTHLY"
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
    this.getLeaderBoard(this.leaderBoardType);
    this.leaderBoardInterval = setInterval(()=>{
      this.getLeaderBoard(this.leaderBoardType);
    },5000)
    
  }

  getLeaderBoard(leaderBoardType){
    this.leaderBoardType = leaderBoardType
    this.userId = this.userService.userId
    this.apiService.getLeaderBoard({
        "userId": this.userId,
        "summaryType" : leaderBoardType
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

   ngOnDestroy(){
     if(this.leaderBoardInterval){
       clearInterval(this.leaderBoardInterval)
     }
   }

}
