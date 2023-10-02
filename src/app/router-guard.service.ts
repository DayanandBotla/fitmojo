import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService  implements CanActivate {
  // currentURL_slug;
   constructor(
     private userService:UserService,
     private router: Router,
   ) {}
 
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

      const userId = this.userService.userId;
      if(!userId){
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }

   }
 }
