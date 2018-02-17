import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../../shared/shared.module';
import { HttpModule } from '@angular/http';
import {ProjectService} from './project.service';
import {ProjectModel} from './projectmodel';
import {ProjectDetails} from './projectDetails';
import {ProjectFeatures} from './projectFeatures';
import {UiSwitchModule} from 'ng2-ui-switch';
import {animate, style, transition, trigger} from '@angular/animations';
// Import your library
import { ArchwizardModule } from 'ng2-archwizard';


@NgModule({
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    UiSwitchModule,
    HttpModule,
    FormsModule,
    SelectModule,
    ArchwizardModule
  ],
  declarations: [ProjectComponent],
  providers: [ProjectService,ProjectModel,ProjectDetails,ProjectFeatures]
})
export class ProjectModule { }
