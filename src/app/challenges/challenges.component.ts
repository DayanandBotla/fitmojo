import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Choices from 'choices.js';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { forkJoin } from 'rxjs';
import { ApiService } from '../api.service';
import { FormValidators } from '../FormValidators';
import { UserService } from '../user.service';
import { ValidatorsService } from '../validators.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent extends FormValidators{

  createChallangeForm = new FormGroup({
    challengeName: new FormControl('', [Validators.required,ValidatorsService.validName(2,250)]),
    challengeDesc: new FormControl('', [Validators.required,ValidatorsService.validName(2,250)]),
    userList: new FormControl([], [Validators.required]),
  });

  data = [];
  challangeList = []
  choicesDropdown;
  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private apiService:ApiService,
    private userService:UserService
  ){
    super()
  }

  ngOnInit(){
    let userId = this.userService.userId;

    forkJoin({
      userChallanges: this.apiService.getUserChallenges({userId:userId}),
      allUserDetails: this.apiService.getAllUserDetails()
    }).subscribe(({userChallanges, allUserDetails}) =>{
      if(userChallanges && userChallanges?.status=== "SUCCESS"){
        this.challangeList = userChallanges?.challegeBasicDataList || []
      }
      this.userListDropdownStructure(allUserDetails)    
    })
  }

  userListDropdownStructure(usersList){
    let userId = this.userService.userId;
    if(usersList && usersList.length > 0){
      let userData = []
      usersList.forEach(user => {
        if(user ){
          let userObj = {
            value: user.userId,
            label: `<img src="http://10.0.4.51:8080/FitMojo-v1/profilePic/${user?.userId}/${user?.profilePicUrl}"/> ${user.name}`,
            selected: user?.userId === userId ? true : false,
            disabled: user?.userId === userId ? true : false,
            customProperties: {
              name: user.name,
              email: user.emailId
            }
          }
          userData.push(userObj)
        }
      });
      this.data = [...userData]
    } else {
      this.data = []
    }
  }

  createChallangeOpen(){
    this.ngxSmartModalService.getModal('createChallangeModal').open();
    let userId = this.userService.userId;
    setTimeout(()=>{
      if(!this.choicesDropdown){
        const element = document.querySelector('#userList');
        this.choicesDropdown = new Choices(element,{
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

        this.choicesDropdown.passedElement.element.addEventListener(
          'change',
          (value)  => {
            // do something creative here...
            console.log(value)
            const userList = [...this.createChallangeForm.value.userList];
            if(!userList.includes(userId)){
              userList.push(userId)
              this.choicesDropdown.setChoiceByValue(userList);
              this.createChallangeForm.get("userList").setValue(userList)
            }
            
          },
          false,
        );
        this.choicesDropdown.init();
        this.createChallangeForm.get("userList").setValue([userId])
        console.log(this.createChallangeForm.value); 
      }
      
    })
  }
  createChallangeClose(){
    this.ngxSmartModalService.getModal('createChallangeModal').close();
    // closing form re initialise everything
    // if(this.choicesDropdown){
    //   this.createChallangeForm.get("userList").setValue([this.userService.userId]);
    //   this.createChallangeForm.get("challengeName").setValue("");
    //   this.createChallangeForm.get("challengeDesc").setValue("");
    // }
  }

  createChallange(){
    let userId = this.userService.userId;
    this.apiService.createChallenge(this.createChallangeForm.value).subscribe(
      createResponse =>{
        if(createResponse?.status === "SUCCESS"){
          this.apiService.getUserChallenges({userId:userId}).subscribe(
            userChallanges =>{
              if(userChallanges && userChallanges?.status=== "SUCCESS"){
                this.challangeList = userChallanges?.challegeBasicDataList || []
                this.createChallangeClose();
              }
            }
          )
        }
      }
    )
  }

  viewChallangeLeaderboard(challangeId){
    this.apiService.getChallengeLeaderBoard(challangeId).subscribe(
      challangeLeaderboard =>{
        console.log(challangeLeaderboard)
      }
    )
  }

}
