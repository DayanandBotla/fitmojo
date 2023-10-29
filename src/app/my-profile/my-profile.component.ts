import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NgxSmartModalService } from "ngx-smart-modal";
import { UserService } from "../user.service";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent {
  destroy$: Subject<boolean> = new Subject();

  @Input() userData;
  greetingTxt;
  daymoods = ['Grateful', 'Blessed', 'Excited', 'Relaxed', 'Stressed', 'Sad' ]
  constructor(
    private router: Router,
    private userService: UserService,
    public ngxSmartModalService: NgxSmartModalService
  ) {}
  ngOnInit() {
    this.greeting();
  }
  ngAfterViewInit() {}

  greeting() {
    const timeNow = new Date().getHours();

    if (timeNow >= 0 && timeNow < 12) {
      this.greetingTxt = "Good morning";
    } else if (timeNow >= 12 && timeNow < 15) {
      this.greetingTxt = "Good afternoon";
    } else {
      this.greetingTxt = "Good evening";
    }
  }
}
