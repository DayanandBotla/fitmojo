import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connect-wellness',
  templateUrl: './connect-wellness.component.html',
  styleUrls: ['./connect-wellness.component.scss']
})
export class ConnectWellnessComponent {

  @Output() closePopup = new EventEmitter<any>();
  step = "SELECT_TYPE";
  integrationUrl;
  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private userService: UserService,
    private apiService:ApiService
    ) {}


  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('connectWellness').open()
  }

  closeEntry(){
    this.closePopup.emit("closeConnect")
    this.ngxSmartModalService.getModal('connectWellness').close()
  }

  connectFitnessApp(type){
    const userId = this.userService.userId;
    this.apiService.getIntegrationAuthUrl({userId,integrationType:type}).subscribe(
      urlResponse =>{
        console.log(urlResponse);
        this.integrationUrl = urlResponse.replace("https: ","https:");
        this.step = "INTEGRATE";  
      }
    )

  }
}
