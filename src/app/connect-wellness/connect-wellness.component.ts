import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-connect-wellness',
  templateUrl: './connect-wellness.component.html',
  styleUrls: ['./connect-wellness.component.scss']
})
export class ConnectWellnessComponent {


  constructor(
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService,
    ) {}

  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('connectWellness').open()
  }

  closeEntry(){
    this.router.navigate(['/'])
  }
}
