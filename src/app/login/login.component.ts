import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { FormValidators } from '../FormValidators';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormValidators {
  
  showPassword: boolean = true;

  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  
  constructor(
    private router:Router,
    private apiService:ApiService,
    public ngxSmartModalService: NgxSmartModalService,
    private userService:UserService,
    private authService:AuthService
  ) {
      super()
    }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('LoginModal').open()
  }

  closeEntry(){
    this.router.navigate(['/'])
  }

  login(){
    this.removeErrorMessage("loginErrorMsg")
    if(this.loginForm.valid){
      this.apiService.post("loginUser",this.loginForm.value).subscribe(apiResponse=>{
        if(apiResponse?.status==="SUCCESS"){
          this.userService.userId = apiResponse?.user?.userId;
          this.userService.emailId = apiResponse?.user?.emailId;
          this.authService.setToken(apiResponse?.token)
          this.router.navigate(['/home']);
        } else {
          if(apiResponse?.status==="FAILURE"){
            if(apiResponse?.errorId === 1005 || apiResponse?.errorId === 1004){
              this.setErrorMessage("loginErrorMsg","Invalid Credentials")
            } else {
              this.setErrorMessage("loginErrorMsg","Something Went Wrong. Try again in some time")
            }
          }
        }
      })
    } else {
      this.validateAllFormFields(this.loginForm)
    }
  }


  gotoSignUp(){
    this.router.navigate(['/register'])
  }
  

}
