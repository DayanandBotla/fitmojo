import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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
  challengesPage = false;
  profilePage = false;
  userData:any;

  appSettingsOpen = false;
  appSettingBtnClick = false;

  appSettingsLists = ['Pause my feed', 'Resume my feed', 'Disconnect me']

  @HostListener('document:click', ['$event'])
  onClick() {
    if (!this.appSettingBtnClick) {
      this.appSettingsOpen = false;
    }
    this.appSettingBtnClick = false;
  }
  @HostListener('window:scroll', ['$event']) onScroll() {
    const ww = document.body.clientWidth;
    if (ww <= 1199) {
      this.appSettingsOpen = false;
    }
  }

  
  constructor(
    private userService: UserService,
    private router:Router,
    private apiService:ApiService,
    private authService:AuthService
  ){
    this.userService.isUserProfileUpdated$.pipe(takeUntil(this.destroy$)).subscribe(status => {
      if(status){
        this.getUserDetails();
      }
    });
  }

  ngOnInit(){
    const windowUrl = window.location.pathname;
     if(windowUrl === "/challenges"){
       this.challengesPage = true;
       this.isUserIntegrationOpen = false;
       this.profilePage = false
     } else if (windowUrl === "/profile"){
      this.challengesPage = false;
      this.isUserIntegrationOpen = false;
      this.profilePage = true
     }else{
      this.challengesPage = false;
      this.isUserIntegrationOpen = false;
      this.profilePage = false
     }
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserProfile().subscribe(
      userDetails =>{
        if(userDetails?.status === 'SUCCESS' && userDetails?.user){
          this.userService.userProfile = userDetails?.user;
          this.userData = userDetails?.user;
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
    } else if(event === "Logout"){
      this.apiService.logout().subscribe(
        logoutResposne =>{
            this.authService.removeToken();
            this.router.navigate(["/login"])
          
        }
      )
    }
  }

  toggleAppSettingButton() {
    this.appSettingsOpen = !this.appSettingsOpen;
  }

  preventCloseOnClick() {
    this.appSettingBtnClick = true;

  }

}
