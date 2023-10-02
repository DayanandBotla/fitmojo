import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule
  ]
})
export class SharedFormModule { }
