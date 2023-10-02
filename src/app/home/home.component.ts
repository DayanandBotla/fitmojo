import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isTeamAvailable = true;
  isUserIntegrationOpen = true;
  destroy$: Subject<boolean> = new Subject();
  constructor(
    private userService: UserService,
    private router:Router
  ){
    this.userService.isUserProfileUpdated$.pipe(takeUntil(this.destroy$)).subscribe(status => {
      if(status){
        this.getUserDetails()
      }
    });
  }

  ngOnInit(){
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserProfile().subscribe(
      userDetails =>{
        if(userDetails?.status === 'SUCCESS' && userDetails?.user){
          if(userDetails?.user?.userClientDetails?.teamId === 0){
            this.isTeamAvailable = false;
          } else {
            this.isTeamAvailable = true;
            if(!userDetails?.user?.userIntegrationDetails?.integrationStatus){
              this.isUserIntegrationOpen = true
            } else{
              this.isUserIntegrationOpen = false
            }
          }
        }
      }
    )
  }

  navClicked(event){
    if(event === "connectAccount"){
      this.isUserIntegrationOpen = true;
    } else if(event === "closeConnect"){
      this.isUserIntegrationOpen = false;
    }
  }

}
