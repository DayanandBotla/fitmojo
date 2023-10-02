import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  @Output() navClicked = new EventEmitter<any>();

  constructor(private router:Router){}

  connectAccount(){
    this.navClicked.emit("connectAccount");
  }

  
  myProfile(){
    this.router.navigate(['/myprofile'])
  }
}
