import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import { CommonModule } from '@angular/common';
import { PropComponent } from './prop.component';
import {PropRoutingModule} from './prop-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {PropService} from './prop.service';
import {PropModel} from './propmodel';
import {PropertyDetails} from './propDetails';
import {PropertyFeatures} from './propFeatures';
import {UiSwitchModule} from 'ng2-ui-switch';


@NgModule({
  imports: [
    CommonModule,
    PropRoutingModule,
    SharedModule,
    UiSwitchModule,
    FormsModule,
    SelectModule
  ],
  declarations: [PropComponent],
  providers: [PropService,PropModel,PropertyDetails,PropertyFeatures]
})
export class PropModule { }
