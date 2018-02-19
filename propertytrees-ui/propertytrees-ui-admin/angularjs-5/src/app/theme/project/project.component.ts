import { Component, OnInit } from '@angular/core';
import {ProjectService} from './project.service';
import {ProjectModel} from './projectmodel';
import {IOption} from 'ng-select';
import {animate, style, transition, trigger} from '@angular/animations';
import {PropertyType} from './propertyType';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {MovingDirection} from 'ng2-archwizard';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit {
showError:boolean=false;
public amenitiesArray: Array<String> = [];
tabType: String='Residential';
public propertyTypeOption: Array<IOption> = this.projectService.getPropertyType();
public areaUnitOption: Array<IOption> = this.projectService.getareaUnitOption();
bannerTypeOption: Array<PropertyType> = this.projectService.getBannerTypeOption();
public availabilityOption: Array<IOption> = this.projectService.getAvailabilityOption();
amenitiesMenu: Array<PropertyType> = this.projectService.getAmenitiesMenu('x');

handlePlanImage(files: FileList) {
    this.projectModel.plan.floorPlan.fileToUpload = files;
}

promiseBooks: Promise<IOption[]>
   books: IOption[];
cityOption: Array<IOption>;
canExitStep1: (MovingDirection) => boolean = (direction) => {
    switch (direction) {
      case MovingDirection.Forwards:
        return this.checkStep2();
    }
  }

checkStep2(): boolean {
      
    return true;
  }

isExist(x) : number
{
return this.amenitiesArray.indexOf(x);
}

setAmenties(x)
{
var index = this.amenitiesArray.indexOf(x);
if (index > -1) {
    this.amenitiesArray.splice(index, 1);
}
else
{
 this.amenitiesArray.push(x);   
}
}

saveMethod()
{
	this.projectService.save(this.projectModel);
	this.projectModel.isSubmitted=true;

}
  constructor(private projectService:ProjectService, private projectModel:ProjectModel) { }

  ngOnInit(): void {
  this.projectModel.type="SELL";
  this.promiseBooks = this.projectService.getCity();
  this.promiseBooks.then(    
           opt => this.cityOption= opt);
   }

}
