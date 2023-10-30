import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { catchError, map, Observable, retry, share, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http:HttpClient
  ) { }


  get(url:string): Observable<any> {
    let apiUrl = "http://10.0.4.51:8080/FitMojo-v1/" + url;
    return this.http
      .get<any>(apiUrl)
      .pipe(catchError(this.handleError));
  }

  post(url: string,formData: any): Observable<any> {
    let apiUrl = "http://10.0.4.51:8080/FitMojo-v1/" + url;
    return this.http.post<any>(apiUrl, formData).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = 'Server Error';
    return throwError(() => {
      return errorMessage;
    });
  }


  registerUser(formData:any){
    return this.post("createUser",formData)
  }

  getUserProfile(userDetails){
    return this.post("getUserDetails",userDetails)
  }

  updateUser(userDetails){
    return this.post("updateUser",userDetails)
  }

  getLeaderBoard(leaderBoardDetails){
    return this.post("getLeaderBoard",leaderBoardDetails)
  }
  
  getIntegrationAuthUrl(authUrlDetails){
    return this.post("getIntegrationAuthUrl",authUrlDetails)
  }
  
  getUserStepsSummary(stepsSumaryReq){
    return this.post("getUserStepsSummary",stepsSumaryReq)
  }
  
  checkToken(){
    return this.post("checkToken",{})
  }
  
  logout(){
    return this.post("logoutUser",{})

  }

  getSSOUrl(){
    return this.get("getMicrosoftAuthUrl")

  }

  getUserChallenges(userId){
    return this.post("getUserChallenges",userId)
  }

  getAllUserDetails(){
    return this.post("getAllUserDetails",{})
  }

  createChallenge(challangeReqData){
    return this.post("createChallenge",challangeReqData)
  }

  getChallengeLeaderBoard(challangeId){
    return this.post("getChallengeLeaderBoard",challangeId)
  }

  

}