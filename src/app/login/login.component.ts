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
  index = 0;
  words = ["Fitness is not a destination.","It's a way of life."];
  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  deleting;
  writing
  constructor(
    private router:Router,
    private apiService:ApiService,
    public ngxSmartModalService: NgxSmartModalService,
    private userService:UserService,
    private authService:AuthService
  ) {
      super()
    }

    ngOnInit(){
      
    }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('LoginModal').open();
    this.startTyping();
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



  startTyping(){
    
    this.type(this.words[0])
  }
  
type(word){
  let placeholder = document.getElementById("text");
    let i = 0;
		//Set the interval that makes the writing animation.
    this.writing = setInterval(()=>{
				//Add the letter at the i index of the current word in the placeholder.
        placeholder.innerHTML += word.charAt(i);
        i ++;
				//If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
        if(i>=word.length){
            clearInterval(this.writing);
            setTimeout(() =>{this.erase()}, 1000);
        }
    }, 75)

}

erase(){
	//Set the interval that makes the deleting animation.
  const self = this;
  let placeholder = document.getElementById("text");
    this.deleting = setInterval(() => {
				//Pop off the last character of the previously written sentence.
        placeholder.innerHTML = placeholder.innerHTML.slice(0,-1);
				//If no one single letter remains, the deleting animation interval stops.
        if(placeholder.innerHTML.length <= 0){
            clearInterval(this.deleting);
						//The index var increases by 1, the writing animation is about to start with the next sentence.
            self.index++;
						//If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
            if(self.index>=self.words.length){
              self.index = 0;
            }
            self.type(self.words[self.index])
        }
    
        
    }, 25);

}  

ngOnDestroy(){
  if(this.deleting){
    clearInterval(this.deleting);
  }
  if(this.writing){
    clearInterval(this.writing);
  }
}

}
