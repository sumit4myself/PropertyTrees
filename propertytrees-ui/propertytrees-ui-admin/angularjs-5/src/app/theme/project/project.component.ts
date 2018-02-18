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
tabType: String='Residential';
public propertyTypeOption: Array<IOption> = this.projectService.getPropertyType();
public availabilityOption: Array<IOption> = this.projectService.getAvailabilityOption();
public transTypeOption: Array<IOption> = this.projectService.getTransTypeOption();
public amenitiesOption: Array<IOption> = this.projectService.getAmenitiesOption();
public numericOption: Array<IOption> = this.projectService.getNumericOption();
public unitTypeOption: Array<IOption> = this.projectService.getUnitTypeOption();
public areaUnitOption: Array<IOption> = this.projectService.getareaUnitOption();
public configrationOption: Array<IOption> = this.projectService.getConfigOption();
propOnFloorOption: Array<IOption> = this.projectService.getPropOnFloorOption();
public amenitiesArray: Array<String> = [];
ownerShipOption: Array<IOption> = this.projectService.getOwnerShipOption();
propTypeMenu: Array<PropertyType> = this.projectService.getProjectTypeMenu(this.projectModel.propType);
amenitiesMenu: Array<PropertyType> = this.projectService.getAmenitiesMenu(this.projectModel.propType);

commercialMenu: Array<PropertyType> = this.projectService.getCommercialMenu(this.projectModel.propType);
possessionOption: Array<IOption> = this.projectService.getPossessionOption();
propertyAgeOption: Array<IOption> = this.projectService.getPropertyAgeOption();
powerBackupOption: Array<IOption> = this.projectService.getPowerBackupOption();
facigOption: Array<IOption> = this.projectService.getFacigOption();
facigMeasureOption: Array<IOption> = this.projectService.getFacigMeasureOption();
flooringTypeOption: Array<IOption> = this.projectService.getFlooringTypeOption();
maintenanceTypeOption: Array<IOption> = this.projectService.getMaintenanceTypeOption();

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
      this.showError = this.projectModel.propType === undefined;
    return this.projectModel.propType !== undefined;
  }
setClass(x)
{
this.projectModel.slctd=x;
}

setProjectType(x)
{
this.projectModel.propType=x;
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
setMenu(name)
{
  this.propTypeMenu=this.projectService.getProjectTypeMenu(name);
  this.commercialMenu=this.projectService.getCommercialMenu(name);
}
saveMethod()
{
	this.projectService.save(this.projectModel);
	this.projectModel.isSubmitted=true;

}
  constructor(private projectService:ProjectService, private projectModel:ProjectModel) { }

public beforeChange($event: NgbTabChangeEvent) {
this.projectModel.propType=undefined;
        this.tabType=$event.nextId;
    };

  ngOnInit(): void {
  this.projectModel.type="SELL";
  this.promiseBooks = this.projectService.getCity();
  this.promiseBooks.then(    
           opt => this.cityOption= opt);
   }

}
