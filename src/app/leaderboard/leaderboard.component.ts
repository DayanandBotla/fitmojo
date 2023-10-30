import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true}
    )
  ])
]);
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  animations: [ listAnimation]

})
export class LeaderboardComponent {
  leaderBoardData=[];
  userCurrentRank;
  @Input() isUserIntegrationOpen;
  leaderBoardInterval
  userId;
  leaderBoardType = "MONTHLY"
  userProfile;
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
    this.userId = this.userService.userId;
    this.apiService.getLeaderBoard({
        "userId": this.userId,
        "summaryType" : leaderBoardType
    }).subscribe(
      leaderBoardResponse =>{
        this.userProfile = this.userService.userProfile
        this.leaderBoardData = leaderBoardResponse?.leaderBoardList || [];
        this.userCurrentRank = leaderBoardResponse?.userCurrentRank ;
      },
      
    )
  }

  onImgError(event:any){
    event.target.src = '../assets/img/no-img.jpeg';
    event.target.classList.add('xxxx');
    
   }

   ngOnDestroy(){
     if(this.leaderBoardInterval){
       clearInterval(this.leaderBoardInterval)
     }
   }

}
