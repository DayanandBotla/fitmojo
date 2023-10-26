import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ValidatorsService } from '../validators.service';
import {FormValidators} from 'src/app/FormValidators';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})



export class RegistrationComponent extends FormValidators{

  showPassword: boolean = true;
  
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required,ValidatorsService.validName(2,250)]),
    email: new FormControl('', [Validators.required,ValidatorsService.validateEmail()]),
    password: new FormControl('', [Validators.required,ValidatorsService.validatePassword(3)]),
    image: new FormControl('', [Validators.required]),
    fileName: new FormControl('', [Validators.required])
  });

  constructor(
    private router:Router,
    private apiService:ApiService,
    public ngxSmartModalService: NgxSmartModalService,
    private userService:UserService,
    private authService: AuthService
    ) {
      super()
    }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('SignUpModal').open()
  }


  closeEntry(){
    this.router.navigate(['/'])
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.patchValue({
        image: file,
        fileName: file.name
      });
    }
  }

  resetFile(){
    const imageInput = document.getElementById("imgupload") as HTMLInputElement
    imageInput.value = "";
    this.registerForm.patchValue({
      fileName: ""
    });

  }

  register(){
    if(this.registerForm.valid){
      const formData = new FormData();
      formData.append("name",(this.registerForm?.get('name')?.value || ""))
      formData.append("emailId",(this.registerForm?.get('email')?.value || ""))
      formData.append("password",(this.registerForm?.get('password')?.value || ""))
      formData.append('image', (this.registerForm?.get('image')?.value || ""));
      this.apiService.post("createUser",formData).subscribe(apiResponse=>{
        if(apiResponse?.status === 'SUCCESS'){
          this.apiService.post("loginUser",{emailId:this.registerForm?.get('email')?.value,password:this.registerForm?.get('password')?.value}).subscribe(apiResponse=>{
            if(apiResponse?.status==="SUCCESS"){
              this.userService.userId = apiResponse?.user?.userId;
              this.userService.emailId = apiResponse?.user?.emailId;
              this.authService.setToken(apiResponse?.token)
              this.router.navigate(['/home']);
            }
          })
        }
      })
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }

  gotoLogin(){
    this.router.navigate(['/login'])
  }
}
