import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent {
  clients =[
    {
      name: "Techmojo",
      id: 1
    }
  ];
  internalTeam = [
    {
      name:"Pragmatic Solutions",
      id: 1
    },
    {
      name:"PP Bet",
      id: 2
    },
    {
      name:"Connect Pay",
      id: 3
    },
    {
      name:"HR",
      id: 4
    },
    {
      name:"IT",
      id: 5
    }
  ];

  teamSelectionForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    teamId:new FormControl(1, [Validators.required]),
    clientTeamId: new FormControl(1, [Validators.required]),
  });

  constructor(
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService,
    private apiService:ApiService,
    private userService:UserService
  ) {}

  ngOnInit(){
    const userId = this.userService.userId;
    if(userId){
      this.teamSelectionForm.get('userId').setValue(userId);
    } else {
      this.router.navigate(['/login'])
    }
  }
  
  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('teamSelection').open()
  }

  closeEntry(){
    this.router.navigate(['/'])
  }

  saveTeamDetails(){
    this.apiService.updateUser(this.teamSelectionForm.value).subscribe(
      updateUserResponse =>{
        if(updateUserResponse?.status === "SUCCESS"){
          this.userService.broadcastIsUserProfileUpdated(true);
          this.router.navigate(['/home'])
        }
      }
    )
  }
}


