import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  showPassword: boolean = true;

  registerForm = new FormGroup({
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });


  
  constructor(
    private router:Router,
    private apiService:ApiService,
    public ngxSmartModalService: NgxSmartModalService) {}

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('LoginModal').open()
  }

  closeEntry(){
    this.router.navigate(['/'])
  }

  login(){
    this.apiService.post("loginUser",this.registerForm.value).subscribe(apiResponse=>{
      console.log(apiResponse);
    })
  }

}
