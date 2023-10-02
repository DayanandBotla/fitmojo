import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ValidatorsService } from '../validators.service';
import {FormValidators} from 'src/app/FormValidators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends FormValidators{
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
        console.log(apiResponse);
      })
    } else {
      this.validateAllFormFields(this.registerForm);
    }
  }
}
