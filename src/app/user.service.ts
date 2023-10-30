import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId;
  emailId;
  userProfile;
  checkUserProfileCallStack = []

  private isUserProfileUpdated = new Subject<any>();
  isUserProfileUpdated$ = this.isUserProfileUpdated.asObservable();

  broadcastIsUserProfileUpdated(status) {
    this.isUserProfileUpdated.next(status);
  }

  private openConnect = new Subject<boolean>();
  openConnect$ = this.openConnect.asObservable();

  broadcastOpenConnect(status: boolean) {
    this.openConnect.next(status);
  }

  constructor(
    private apiService:ApiService
  ) { }

  getUserProfiles(){
    return this.apiService.getUserProfile({userId:this.userId,emailId:this.emailId})
  }

  getUserProfile(isForce?): Observable<String> {
    if (this.userProfile && !isForce) {
      return of(this.userProfile);
    } else {
      return new Observable((resolve) => {
        if (this.checkUserProfileCallStack.length > 0) {
          this.checkUserProfileCallStack.push(resolve);
        }
        else {
          this.checkUserProfileCallStack.push(resolve);
          this.apiService.getUserProfile({userId:this.userId,emailId:this.emailId}).subscribe(userProfileData => {
            if (userProfileData?.status && userProfileData?.user) {
              this.userProfile = userProfileData.user;
              this.broadcastIsUserProfileUpdated(true)
              for (let call in this.checkUserProfileCallStack) {
                this.checkUserProfileCallStack[call].next(this.userProfile);
              }
              this.checkUserProfileCallStack = [];
            }
          });
        }
      });
    }
  }

}
