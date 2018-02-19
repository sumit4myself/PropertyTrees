import {FormsModule}  from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../header/sign_up.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    
  ],
  declarations: [],
  providers: [UserService]
})
export class HeaderModule { }
