import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';

@Injectable()
export class PropService {
public static readonly PROPERTY_TYPE: Array<IOption> = [
    {value: 'PG', label: 'PG'},
    {value: 'RESIDENTIAL', label: 'RESIDENTIAL'},
    {value: 'COMMERCIAL', label: 'COMMERCIAL'}
  ];

  public static readonly AVAILABILITY_OPTION: Array<IOption> = [
    {value: 'UNDER_CONSTRUCTION', label: 'UNDER CONSTRUCTION'},
    {value: 'READY_TO_MOVE', label: 'READY TO MOVE'}
  ];

  public static readonly TRANSTYPE_OPTION: Array<IOption> = [
    {value: 'RESALE', label: 'RESALE'},
    {value: 'NEW_BOOKING', label: 'NEW BOOKING'}
  ];

  public static readonly AMENITIES_OPTION: Array<IOption> = [
    {value: 'LIFTS', label: 'LIFTS'},
    {value: 'PARK', label: 'PARK'},
    {value: 'MAINTAINANCE_STAFF', label: 'MAINTAINANCE STAFF'},
    {value: 'VISITOR_PARKING', label: 'VISITOR PARKING'},
    {value: 'WATER_STORAGE', label: 'WATER STORAGE'},
    {value: 'VAASTU_COMPLIANT', label: 'VAASTU COMPLIANT'},
    {value: 'INTERCOM_FACILITY', label: 'INTERCOM FACILITY'},
    {value: 'SECURITY', label: ' SECURITY'},
    {value: 'FIRE_ALARM', label: ' FIRE ALARM'}
  ];

getPropertyType(): Array<IOption> {
        return this.cloneOptions(PropService.PROPERTY_TYPE);
    }
getAvailabilityOption(): Array<IOption> {
        return this.cloneOptions(PropService.AVAILABILITY_OPTION);
    }
getTransTypeOption(): Array<IOption> {
        return this.cloneOptions(PropService.TRANSTYPE_OPTION);
    }
getAmenitiesOption(): Array<IOption> {
        return this.cloneOptions(PropService.AMENITIES_OPTION);
    }
    save(propObject): void {
        console.log(JSON.stringify(propObject));
    }
  constructor() { }

private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
