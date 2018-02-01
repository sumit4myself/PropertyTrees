import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';
import {PropertyType} from './propertyType';

import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class PropService {
public static readonly PROPERTY_TYPE: Array<IOption> = [
    {value: 'RENT', label: 'RENT'},
    {value: 'SELL', label: 'SELL'},
    {value: 'PG', label: 'PG'}
  ];

public static readonly PROPERTY_TYPE_SELL_MENU: Array<PropertyType> = [
    {name: 'Residential Apartment', className: 'prop1'},
    {name: 'Residential Land', className: 'prop3'},
    {name: 'Independent House/Villa', className: 'prop2'},
    {name: 'Independent/ Builder Floor', className: 'prop4'},
    {name: 'Farm House', className: 'prop5'},
    {name: 'Studio Apartment', className: 'prop90'},
    {name: 'Serviced Apartments', className: 'prop22'},
    {name: 'Other', className: 'prop80'}
  ];

  public static readonly COMMERCIAL_MENU: Array<PropertyType> = [
    {name: 'Commercial Office/ Space', className: 'prop7'},
    {name: 'Commercial Shops', className: 'prop6'},
    {name: 'Commercial Land/ Inst. Land', className: 'prop9'},
    {name: 'Commercial Showrooms', className: 'prop82'},
    {name: 'Agricultural/ Farm Land', className: 'prop20'},
    {name: 'Industrial Lands/ Plots', className: 'prop16'},
    {name: 'Factory', className: 'prop18'},
    {name: 'Ware House', className: 'prop15'},
    {name: 'Office in IT Park', className: 'prop14'},
    {name: 'Hotel/ Resorts', className: 'prop10'},
    {name: 'Guest-House/ Banquet-Halls', className: 'prop83'},
    {name: 'Space in Retail Mall', className: 'prop12'},
    {name: 'Office in Business Park', className: 'prop13'},
    {name: 'Business center', className: 'prop21'},
    {name: 'Manufacturing', className: 'prop19'},
    {name: 'Cold Storage', className: 'prop17'},
    {name: 'Time Share', className: 'prop11'},
    {name: 'Other', className: 'prop81'}
    
  ];

  public static readonly PROPERTY_TYPE_RENT_MENU: Array<PropertyType> = [
    {name: 'Independent House/Villa', className: 'prop2'},
    {name: 'Independent/ Builder Floor', className: 'prop4'},
    {name: 'Farm House', className: 'prop5'},
    {name: 'Studio Apartment', className: 'prop90'},
    {name: 'Serviced Apartments', className: 'prop22'},
    {name: 'Other', className: 'prop80'}
  ];

  public static readonly PROPERTY_TYPE_PG_MENU: Array<PropertyType> = [
  {name: 'Residential Apartment', className: 'prop1'},
    {name: 'Independent House/Villa', className: 'prop2'},
    {name: 'Independent/ Builder Floor', className: 'prop4'},
    {name: 'Studio Apartment', className: 'prop90'},
    {name: 'Serviced Apartments', className: 'prop22'}
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

    save(propObject): void {
        console.log(JSON.stringify(propObject));
    }
getPropTypeMenu(propertyType : String): Array<PropertyType> {
      if(propertyType==='RENT')
      {
      return PropService.PROPERTY_TYPE_RENT_MENU;
      }
      if(propertyType==='PG')
      {
      return PropService.PROPERTY_TYPE_PG_MENU;
      }
        return PropService.PROPERTY_TYPE_SELL_MENU;
    }
    getCommercialMenu(propertyType : String): Array<PropertyType> {
      if(propertyType!=='PG')
      {
      return PropService.COMMERCIAL_MENU;
      }
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
