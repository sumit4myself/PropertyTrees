import { Component, OnInit } from '@angular/core';
import {PropService} from './prop.service';
import {PropModel} from './propmodel';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

public propertyTypeOption: Array<IOption> = this.propService.getPropertyType();
public availabilityOption: Array<IOption> = this.propService.getAvailabilityOption();
public transTypeOption: Array<IOption> = this.propService.getTransTypeOption();
public amenitiesOption: Array<IOption> = this.propService.getAmenitiesOption();

  constructor(private propService:PropService, private propModel:PropModel) { }

  ngOnInit() {
  this.propModel.type='RESIDENTIAL';
  }

}