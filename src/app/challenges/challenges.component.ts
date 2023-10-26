import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from '../api.service';
import { FormValidators } from '../FormValidators';
import { ValidatorsService } from '../validators.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent extends FormValidators{

  createChallangeForm = new FormGroup({
    name: new FormControl('', [Validators.required,ValidatorsService.validName(2,250)]),
    email: new FormControl('', [Validators.required,ValidatorsService.validateEmail()]),
    userDetails: new FormControl('', [Validators.required]),
  });

  data = [];

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private apiService:ApiService,
  ){
    super()
  }

  ngOnInit(){
    this.apiService.getAllUserDetails().subscribe( 
      usersList =>{
        console.log(usersList);
        if(usersList && usersList.length > 0){
          let userData = []
          usersList.forEach(user => {
            if(user ){
              let userObj = {
                value: user.id,
                label: user.name,
                data: { color: 'red', name: user.name },
              }
              userData.push(userObj)
                
                // {
                //     value: 'hibiscus',
                //     label: 'Hibiscus',
                //     data: { color: 'red', name: 'Hibiscus' },
                // },

            }
          });
          this.data = [...userData]
          // $('.js-example-basic-multiple').select2();
        }
      }
    )
  }

  createChallangeOpen(){
    this.ngxSmartModalService.getModal('createChallange').open()
  }
  createChallangeClose(){
    this.ngxSmartModalService.getModal('createChallange').close()
  }

}
