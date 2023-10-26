import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Choices from 'choices.js';
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

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private apiService:ApiService,
  ){
    super()
  }

  ngOnInit(){

    setTimeout( ()=>{
      const element = document.querySelector('#userDetails');
      const choices = new Choices(element);
      let itemvar = [{
        value: 'Value 1',
        label: 'Label 1',
        id: 1
      },
      {
        value: 'Value 2',
        label: 'Label 2',
        id: 2,
        customProperties: {
          random: 'I am a custom property'
        }
      }]
    },2000 )
    this.apiService.getAllUserDetails().subscribe( 
      usersList =>{
        console.log(usersList);
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
