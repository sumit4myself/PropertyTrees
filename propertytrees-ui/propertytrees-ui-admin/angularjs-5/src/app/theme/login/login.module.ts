import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
