import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent {
  isLogin:boolean=false;
  isSignup:boolean=false;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    public ngxSmartModalService: NgxSmartModalService
  ){
    this.router.url.includes('/register') 
    ? this.isSignup = true 
    : 
      this.router.url.includes('/login')
      ? this.isLogin = true
      : ""
  }

  ngOnInit(){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        if(event.url.includes('/login')){
          this.isLogin = true;
        } else {
          this.isLogin = false
        }
        if(event.url.includes('/register')){
          this.isSignup = true;
        } else {
          this.isSignup = false
        }
      }
    })
    
  }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('myModal').open()
  }


  openLogin(){
    this.router.navigate(['login'], { relativeTo: this.route })
  }

  openSignup(){
    this.router.navigate(['register'], { relativeTo: this.route })
  }

  closeEntry(){
    this.router.navigate(['/'])

  }
      
}
