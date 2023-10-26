import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  @Output() closePopup = new EventEmitter<any>();
  constructor(
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService) {}

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('profilModal').open()
  }

  closeModal(){
    this.closePopup.emit("closeProfile")
    this.ngxSmartModalService.getModal('profilModal').close()
  }
}
