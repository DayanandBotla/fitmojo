import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpParams} from '@angular/common/http'
import { catchError, map, Observable, retry, share, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  httpOptionsUpload = {
    headers: new HttpHeaders({
      'Content-Type': 'mu',
    }),
  };

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

}