import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService  implements CanActivate {
  // currentURL_slug;
   constructor(
     private userService:UserService,
     private authService:AuthService,
     private router: Router,
     private apiService:ApiService,
     private route: ActivatedRoute
   ) {}
 
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let token = this.authService.getToken();
    let isMsLogin;
     if(window.location.search){
      const searchPrams = window.location.search.split("?")[1].split('&');
      searchPrams.forEach(queryParam => {
        if(queryParam.includes("jwtToken")){
          token = queryParam.split("=")[1];
          this.authService.setToken(token);
        }
        if(queryParam.includes("msLogin")){
          isMsLogin = queryParam.split("=")[1]
        }
        if(queryParam.includes("userId")){
          this.userService.userId = queryParam.split("=")[1];
        }
      });
     }
     const userId = this.userService.userId;

      if(isMsLogin){
        token = this.route.snapshot.queryParamMap.get('jwtToken');
      }
      if(!token && !isMsLogin){
        this.router.navigate(['/login']);
        return false;
      } else if(token && !userId){
        return this.apiService.checkToken()
        .pipe(
          map(response => {
            if(response.status === 'SUCCESS'){
              this.userService.userId = response.userId
              return true
            } else {
              return false
            }
          }),
          catchError(error => of(false))
        );
      }

   }
 }
