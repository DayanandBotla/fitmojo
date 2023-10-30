import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  uploadProfilePic = false;
  teamSelectionForm:FormGroup = this.formBuilder.group({
    userId:['', Validators.required],
    teamId:[1, Validators.required],
    clientTeamId:[1, Validators.required]
  });

  constructor(
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService,
    private apiService:ApiService,
    private userService:UserService,
    private formBuilder:FormBuilder
  ) {}

  ngOnInit(){
    const userId = this.userService.userId;
    if(userId){
      this.teamSelectionForm.get('userId').setValue(userId);
      const userProfile = this.userService.userProfile;
      if(!userProfile?.profilePicUrl){
        this.uploadProfilePic = true;
        this.teamSelectionForm.addControl('image',new FormControl('',[Validators.required]))
        this.teamSelectionForm.addControl('fileName',new FormControl('',[Validators.required]))
      }

    //     image: new FormControl('', [Validators.required]),
    // fileName: new FormControl('', [Validators.required])
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
    let formData
    formData =  new FormData();
      formData.append("userId",(this.teamSelectionForm?.get('userId')?.value || ""))
      formData.append("teamId",(this.teamSelectionForm?.get('teamId')?.value || ""))
      formData.append("clientTeamId",(this.teamSelectionForm?.get('clientTeamId')?.value || ""))
    if(this.uploadProfilePic){
      formData.append('image', (this.teamSelectionForm?.get('image')?.value || ""));
    }

    this.apiService.updateUser(formData).subscribe(
      updateUserResponse =>{
        if(updateUserResponse?.status === "SUCCESS"){
          this.userService.broadcastIsUserProfileUpdated("forceCall");
          this.router.navigate(['/home'])
        }
      }
    )
  }

  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.teamSelectionForm.patchValue({
        image: file,
        fileName: file.name
      });
    }
  }

  resetFile(){
    const imageInput = document.getElementById("imgupload") as HTMLInputElement
    imageInput.value = "";
    this.teamSelectionForm.patchValue({
      fileName: ""
    });

  }
}


