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
ownerShipOption: Array<IOption> = this.propService.getOwnerShipOption();
propTypeMenu: Array<PropertyType> = this.propService.getPropTypeMenu(this.propModel.propType);
commercialMenu: Array<PropertyType> = this.propService.getCommercialMenu(this.propModel.propType);
possessionOption: Array<IOption> = this.propService.getPossessionOption();
propertyAgeOption: Array<IOption> = this.propService.getPropertyAgeOption();
powerBackupOption: Array<IOption> = this.propService.getPowerBackupOption();
promiseBooks: Promise<IOption[]>
   books: IOption[];
cityOption: Array<IOption>;

setClass(x)
{
this.propModel.slctd=x;
}

setPropType(x)
{

this.propModel.propType=x;

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
