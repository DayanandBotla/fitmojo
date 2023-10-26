import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isTeamAvailable = true;
  isUserIntegrationOpen = true;
  openMyProfile = false
  destroy$: Subject<boolean> = new Subject();
  constructor(
    private userService: UserService,
    private router:Router,
    private apiService:ApiService,
    private authService:AuthService
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
          this.userService.userProfile = userDetails?.user
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
    } else if (event === "myProfile"){
      this.openMyProfile = true;
    } else if(event === "closeProfile"){
      this.openMyProfile = false;
    } else if(event === "Logout"){
      this.apiService.logout().subscribe(
        logoutResposne =>{
            this.authService.removeToken();
            this.router.navigate(["/login"])
          
        }
      )
    }
  }

}
