import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';
import {PropertyType} from './propertyType';

import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ProjectService {
public static readonly PROPERTY_TYPE: Array<IOption> = [
    {value: 'RENT', label: 'RENT'},
    {value: 'SELL', label: 'SELL'},
    {value: 'PG', label: 'PG'}
  ];

public static readonly MAINTENANCE_TYPE: Array<IOption> = [
    {value: 'MONTHLY', label: 'MONTHLY'},
    {value: 'YEARLY', label: 'YEARLY'},
    {value: 'ONE TIME', label: 'ONE TIME'},
    {value: 'ONE UNIT/MONTHLY', label: 'ONE UNIT/MONTHLY'}
  ];

  public static readonly AMENITES_SELL_MENU: Array<PropertyType> = [
    {name: 'Lift', className: 'amenity21'},
    {name: 'Park', className: 'amenity6'},
    {name: 'Maintenance Staff', className: 'amenity23'},
    {name: 'Visitor Parking', className: 'amenity19'},
    {name: 'Water Storage', className: 'amenity24'},
    {name: 'Vaastu Compliant', className: 'amenity5'},
    {name: 'Intercom Facility', className: 'amenity20'},
    {name: 'Security Fire Alarm', className: 'amenity17'}
  ];

  public static readonly AVAILABILITY_OPTION: Array<IOption> = [
    {value: 'UNDER_CONSTRUCTION', label: 'UNDER CONSTRUCTION'},
    {value: 'READY_TO_MOVE', label: 'READY TO MOVE'}
  ];

public static readonly AREAUNIT_OPTION: Array<IOption> = [
    {value: 'Sq. Feets', label: 'Sq. Feets'},
    {value: 'Sq. Yards', label: 'Sq. Feets'},
    {value: 'Sq. Meters', label: 'Sq. Meters'},
    {value: 'Acres', label: 'Acres'},
    {value: 'Marls', label: 'Marla'}
  ];

  public static readonly BANNER_TYPE: Array<IOption> = [
    {value: 'STRIP', label: 'STRIP'},
    {value: 'SIDE', label: 'SIDE'}
  ];

getBannerTypeOption() : Array<IOption> {
        return this.cloneOptions(ProjectService.BANNER_TYPE);
    }


getPropertyType(): Array<IOption> {
        return this.cloneOptions(ProjectService.PROPERTY_TYPE);
    }
getAvailabilityOption(): Array<IOption> {
        return this.cloneOptions(ProjectService.AVAILABILITY_OPTION);
    }


    getareaUnitOption() : Array<IOption> {
        return this.cloneOptions(ProjectService.AREAUNIT_OPTION);
    }


    save(propObject): void {
        console.log(JSON.stringify(propObject));
        this.http.post("http://localhost:9001/user/login/",propObject).subscribe(
      (res: Response) => {
        console.log(res);
      })
    }

    getAmenitiesMenu(propertyType : String): Array<PropertyType> {
        return ProjectService.AMENITES_SELL_MENU;
    }
    
getCity(): Promise<IOption[]> {
        return this.http.get("http://ec2-34-217-106-45.us-west-2.compute.amazonaws.com:9001/location/cities").toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
    var resArray= new Array();
      var obj= res.json();
      return obj.map(objcts => ({ value: objcts.name, label: objcts.name }));
    }

    private handleErrorPromise (error: Response | any) {
  console.error(error.message || error);
  return Promise.reject(error.message || error);
    }

  constructor(private http: Http) { }

private cloneOptions(options: Array<IOption>): Array<IOption> {
        return options.map(option => ({ value: option.value, label: option.label }));
    }
}
