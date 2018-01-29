import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';

import { Http, Response, Headers } from '@angular/http';

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

  public static readonly NUMERIC_OPTION: Array<IOption> = [
    {value: '0', label: '0'},
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'}
  ];

  public static readonly TRANSTYPE_OPTION: Array<IOption> = [
    {value: 'RESALE', label: 'RESALE'},
    {value: 'NEW_BOOKING', label: 'NEW BOOKING'}
  ];

  public static readonly UNIT_TYPE_OPTION: Array<IOption> = [
    {value: '', label: 'SELECT'},
    {value: '1 BHK', label: '1 BHK'},
    {value: '2 BHK', label: '2 BHK'},
    {value: 'Others', label: 'Others'}
  ];

  public static readonly PROP_FLOOR_OPTION: Array<IOption> = [
    {value: 'Basement', label: 'Basement'},
    {value: 'LG', label: 'LG'},
    {value: 'Ground', label: 'Ground'},
    {value: '1', label: '1'},{value: '2', label: '2'},
    {value: '3', label: '3'}
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
getNumericOption(): Array<IOption> {
        return this.cloneOptions(PropService.NUMERIC_OPTION);
    }
getUnitTypeOption(): Array<IOption> {
        return this.cloneOptions(PropService.UNIT_TYPE_OPTION);
    }
getPropOnFloorOption(): Array<IOption> {
        return this.cloneOptions(PropService.PROP_FLOOR_OPTION);
    }
getCityOption(): Array<IOption> {
this.http.get("http://ec2-34-217-106-45.us-west-2.compute.amazonaws.com:9001/location/cities").subscribe(
      (res: Response) => {
      var obj= JSON.parse(res._body);
      return obj.map(objct => ({ value: objct.name, label: objct.name }));
      })
    }
    save(propObject): void {
        console.log(JSON.stringify(propObject));
    }
  constructor(private http: Http) { }

private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
