import { Component, OnInit } from '@angular/core';
import {PropService} from './prop.service';
import {PropModel} from './propmodel';
import {IOption} from 'ng-select';
import {animate, style, transition, trigger} from '@angular/animations';

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

public propertyTypeOption: Array<IOption> = this.propService.getPropertyType();
public availabilityOption: Array<IOption> = this.propService.getAvailabilityOption();
public transTypeOption: Array<IOption> = this.propService.getTransTypeOption();
public amenitiesOption: Array<IOption> = this.propService.getAmenitiesOption();
public numericOption: Array<IOption> = this.propService.getNumericOption();
public unitTypeOption: Array<IOption> = this.propService.getUnitTypeOption();
propOnFloorOption: Array<IOption> = this.propService.getPropOnFloorOption();
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

saveMethod()
{
	this.propService.save(this.propModel);
	this.propModel.isSubmitted=true;
}

private cloneOptions(options: Array): Array<IOption> {
        console.log(options);
        this.cityOption= options.map(option => ({ value: option, label: option }));
    }
  constructor(private propService:PropService, private propModel:PropModel) { }

  ngOnInit(): void {
  this.promiseBooks = this.propService.getCity();
  this.promiseBooks.then(    
           opt => this.cityOption= opt);
   }

}
