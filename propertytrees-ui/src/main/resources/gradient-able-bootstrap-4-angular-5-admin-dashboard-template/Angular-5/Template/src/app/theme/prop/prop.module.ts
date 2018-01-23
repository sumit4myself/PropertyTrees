import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropComponent } from './prop.component';
import {PropRoutingModule} from './prop-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PropRoutingModule,
    SharedModule
  ],
  declarations: [PropComponent]
})
export class PropModule { }
