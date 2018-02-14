import { Component, OnInit } from '@angular/core';
import {PropService} from './prop.service';
import {PropModel} from './propmodel';
import {IOption} from 'ng-select';
import {animate, style, transition, trigger} from '@angular/animations';
import {PropertyType} from './propertyType';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss'],
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
export class PropComponent implements OnInit {
tabclick:boolean=false;
tabType: String='Residential';
public propertyTypeOption: Array<IOption> = this.propService.getPropertyType();
public availabilityOption: Array<IOption> = this.propService.getAvailabilityOption();
public transTypeOption: Array<IOption> = this.propService.getTransTypeOption();
public amenitiesOption: Array<IOption> = this.propService.getAmenitiesOption();
public numericOption: Array<IOption> = this.propService.getNumericOption();
public unitTypeOption: Array<IOption> = this.propService.getUnitTypeOption();
public areaUnitOption: Array<IOption> = this.propService.getareaUnitOption();
public configrationOption: Array<IOption> = this.propService.getConfigOption();
propOnFloorOption: Array<IOption> = this.propService.getPropOnFloorOption();
public amenitiesArray: Array<String> = [];
ownerShipOption: Array<IOption> = this.propService.getOwnerShipOption();
propTypeMenu: Array<PropertyType> = this.propService.getPropTypeMenu(this.propModel.propType);
amenitiesMenu: Array<PropertyType> = this.propService.getAmenitiesMenu(this.propModel.propType);

commercialMenu: Array<PropertyType> = this.propService.getCommercialMenu(this.propModel.propType);
possessionOption: Array<IOption> = this.propService.getPossessionOption();
propertyAgeOption: Array<IOption> = this.propService.getPropertyAgeOption();
powerBackupOption: Array<IOption> = this.propService.getPowerBackupOption();
facigOption: Array<IOption> = this.propService.getFacigOption();
facigMeasureOption: Array<IOption> = this.propService.getFacigMeasureOption();
flooringTypeOption: Array<IOption> = this.propService.getFlooringTypeOption();
maintenanceTypeOption: Array<IOption> = this.propService.getMaintenanceTypeOption();


promiseBooks: Promise<IOption[]>
   books: IOption[];
cityOption: Array<IOption>;
onStep1Next()
{
  console.log('Next clicked');
}
checkValid(x) : boolean
{
return this.tabclick;
}
handleFileInput(files: FileList) {
    this.propModel.fileToUpload = files;
}
setClass(x)
{
this.propModel.slctd=x;
}

setPropType(x)
{
this.tabclick=true;
this.propModel.propType=x;
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
  this.propTypeMenu=this.propService.getPropTypeMenu(name);
  this.commercialMenu=this.propService.getCommercialMenu(name);
}
saveMethod()
{
	this.propService.save(this.propModel);
	this.propModel.isSubmitted=true;

}
  constructor(private propService:PropService, private propModel:PropModel) { }

public beforeChange($event: NgbTabChangeEvent) {
this.propModel.propType=undefined;
        this.tabType=$event.nextId;
    };

  ngOnInit(): void {
  this.propModel.type="SELL";
  this.promiseBooks = this.propService.getCity();
  this.promiseBooks.then(    
           opt => this.cityOption= opt);
   }

}
