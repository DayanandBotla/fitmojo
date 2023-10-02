import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent {

  internalTeam = ['Pragmatic solutions', 'PP Bet', 'Connecy pay', 'AirAsia', 'Align']
  constructor(
    private router:Router,
    public ngxSmartModalService: NgxSmartModalService,
    ) {}


  
  ngAfterViewInit(){
    this.ngxSmartModalService.getModal('teamSelection').open()
  }

  closeEntry(){
    this.router.navigate(['/'])
  }
}


