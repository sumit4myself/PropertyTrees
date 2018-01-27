import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg.component';
import { RegRoutingModule } from './reg-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RegRoutingModule,
    SharedModule
  ],
  declarations: [RegComponent]
})
export class RegModule { }
