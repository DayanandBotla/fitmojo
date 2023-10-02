import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userId;
  emailId;

  constructor(
    private apiService:ApiService
  ) { }

  getUserProfile(){
    return this.apiService.getUserProfile({userId:this.userId,emailId:this.emailId})
  }

}
