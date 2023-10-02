import { Component } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.scss']
})
export class GetInComponent {
  isLogin:boolean=true;
  isSignup:boolean=false;

  constructor(public ngxSmartModalService: NgxSmartModalService) {

    

    
  }
  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('myModal').open()
  }

  

    openLogin(){
this.isLogin = true;
this.isSignup = false;
    }

    openSignup(){
      this.isSignup = true;
      this.isLogin = false;
      
          }
      

}
