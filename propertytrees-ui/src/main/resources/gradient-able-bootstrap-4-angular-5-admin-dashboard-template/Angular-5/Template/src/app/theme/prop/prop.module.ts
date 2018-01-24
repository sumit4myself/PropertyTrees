import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropComponent } from './prop.component';
import {PropRoutingModule} from './prop-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PropService} from './prop.service';
import {PropModel} from './propmodel';

import {FormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';

import {PropertyDetails} from './propDetails';
import {PropertyFeatures} from './propFeatures';

@NgModule({
  imports: [
    CommonModule,
    PropRoutingModule,
    SharedModule,
    FormsModule,
    SelectModule
  ],
  declarations: [PropComponent],
  providers: [PropService,PropModel,PropertyDetails,PropertyFeatures]
})
export class PropModule { }
