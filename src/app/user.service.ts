import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId;
  emailId;

  private isUserProfileUpdated = new Subject<boolean>();
  isUserProfileUpdated$ = this.isUserProfileUpdated.asObservable();
  broadcastIsUserProfileUpdated(status: boolean) {
    this.isUserProfileUpdated.next(status);
  }

  constructor(
    private apiService:ApiService
  ) { }

  getUserProfile(){
    return this.apiService.getUserProfile({userId:this.userId,emailId:this.emailId})
  }

}
