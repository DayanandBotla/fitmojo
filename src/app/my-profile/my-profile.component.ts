import { Component, Input } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ApiService } from "../api.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent {

  userData;
  greetingTxt;
  daymoods = ['Grateful', 'Blessed', 'Excited', 'Relaxed', 'Stressed', 'Sad' ]
  steps = ['1k', '5k', '10k', '25k', '50k', '100k' ];
  destroy$: Subject<boolean> = new Subject();
  
  constructor(
    private apiServie:ApiService,
    private userService:UserService
  ) {
    this.userService.isUserProfileUpdated$.pipe(takeUntil(this.destroy$)).subscribe(status => {
      if(status){
        this.getUserDetails(false);
      }
    });
  }
  ngOnInit() {
    this.greeting();
    this.getUserDetails(false);
  }
  ngAfterViewInit() {}

  getUserDetails(isForce){
    this.userService.getUserProfile(isForce).subscribe(
      userDetails =>{
        this.userData = userDetails;
      }
    )
  }

  greeting() {
    const timeNow = new Date().getHours();

    if (timeNow >= 0 && timeNow < 12) {
      this.greetingTxt = "Good morning";
    } else if (timeNow >= 12 && timeNow < 15) {
      this.greetingTxt = "Good afternoon";
    } else {
      this.greetingTxt = "Good evening";
    }
  }

  updateIntegrationDetails(status,integrationType){
    if(status === 'CONNECT'){
      this.userService.broadcastOpenConnect(true);
    } else {
      let userId = this.userService.userId
      this.apiServie.updateUserIntegrationDetails({"integrationStatus":status,userId,integrationType}).subscribe(
        updateStatusResponse =>{
          this.getUserDetails(true);
        }
      )
    }
  }
}
