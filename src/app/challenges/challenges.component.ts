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
                value: user.userId,
                label: `<img src="http://10.0.4.51:8080/FitMojo-v1/profilePic/${user?.userId}/${user?.profilePicUrl}"/> ${user.name}`,
                customProperties: {
                  name: user.name,
                  email: user.emailId
                }
              }
              userData.push(userObj)
            }
          });
          this.data = [...userData]
        }
      }
    )
  }

  createChallangeOpen(){
    this.ngxSmartModalService.getModal('createChallangeModal').open();
    setTimeout(()=>{
      const element = document.querySelector('#userDetails');
          const choices = new Choices(element,{
            removeItems: true,
            removeItemButton: true,
            allowHTML: true,
            searchEnabled: false,
            itemSelectText: '',
            searchFields: ['customProperties.name','customProperties.email'],
            noResultsText: 'No results found',
            noChoicesText: 'No choices to choose from',
            choices:[...this.data]
          });
    })
  }
  createChallangeClose(){
    this.ngxSmartModalService.getModal('createChallangeModal').close()
  }

  createChallange(){
    console.log(this.createChallangeForm.value);
    
  }

}
