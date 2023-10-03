import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
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
     private apiService:ApiService
   ) {}
 
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

      const userId = this.userService.userId;
      const token = this.authService.getToken();
      if(!token){
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
