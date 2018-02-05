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

public static readonly AREAUNIT_OPTION: Array<IOption> = [
    {value: 'Sq. Feets', label: 'Sq. Feets'},
    {value: 'Sq. Yards', label: 'Sq. Feets'},
    {value: 'Sq. Meters', label: 'Sq. Meters'},
    {value: 'Acres', label: 'Acres'},
    {value: 'Marls', label: 'Marla'}
  ];

  public static readonly OWNERSHIP_OPTION: Array<IOption> = [
    {value: 'FREEHOLD', label: 'FREEHOLD'},
    {value: 'LEASEHOLD', label: 'LEASEHOLD'},
    {value: 'CO SOCIETY', label: 'CO SOCIETY'},
    {value: 'POWER OF ATORNY', label: 'POWER OF ATORNY'}
  ];

  public static readonly CONFIG_OPTION: Array<IOption> = [
    {value: '3 BHK', label: '3 BHK'},
    {value: 'Others', label: 'Others'}
  ];

  public static readonly POSSESSION_OPTION: Array<IOption> = [
    {value: 'Within 3 months', label: 'Within 3 months'},
    {value: 'Within 6 months', label: 'Within 6 months'},
    {value: 'By 2019', label: 'By 2019'},
    {value: 'After 2019', label: 'After 2019'}
  ];

  public static readonly PROPERTY_AGE_OPTION: Array<IOption> = [
    {value: '0-1 YEAR OLD', label: '0-1 YEAR OLD'},
    {value: '1-10 YEAR OLD', label: '1-10 YEAR OLD'},
    {value: '10+ YEAR OLD', label: '10+ YEAR OLD'}
  ];

public static readonly POWER_BACKUP_OPTION: Array<IOption> = [
    {value: '0-1 YEAR OLD', label: '0-1 YEAR OLD'},
    {value: '1-10 YEAR OLD', label: '1-10 YEAR OLD'},
    {value: '10+ YEAR OLD', label: '10+ YEAR OLD'}
  ];

  public static readonly FACIG_OPTION: Array<IOption> = [
    {value: 'EAST', label: 'EAST'},
    {value: 'WEST', label: 'WEST'},
    {value: 'SOUTH', label: 'SOUTH'},
    {value: 'NORTH', label: 'NORTH'}
  ];

  public static readonly FACIG_MEASURE_OPTION: Array<IOption> = [
    {value: 'FEET', label: 'FEET'},
    {value: 'METER', label: 'METER'}
  ];

  public static readonly FLOORING_TYPE_OPTION: Array<IOption> = [
    {value: 'MARBLE', label: 'MARBLE'},
    {value: 'CERAMIC', label: 'CERAMIC'},
    {value: 'MOSAIC', label: 'MOSAIC'},
    {value: 'GRENITE', label: 'GRENITE'},
    {value: 'WOOD', label: 'WOOD'}
  ];
getAmenitiesMenu() : Array<IOption> {
        return this.cloneOptions(PropService.FLOORING_TYPE_OPTION);
    }

getFlooringTypeOption() : Array<IOption> {
        return this.cloneOptions(PropService.FLOORING_TYPE_OPTION);
    }

getFacigMeasureOption() : Array<IOption> {
        return this.cloneOptions(PropService.FACIG_MEASURE_OPTION);
    }

getFacigOption() : Array<IOption> {
        return this.cloneOptions(PropService.FACIG_OPTION);
    }

getPowerBackupOption() : Array<IOption> {
        return this.cloneOptions(PropService.POWER_BACKUP_OPTION);
    }
getPropertyAgeOption() : Array<IOption> {
        return this.cloneOptions(PropService.PROPERTY_AGE_OPTION);
    }

getPossessionOption() : Array<IOption> {
        return this.cloneOptions(PropService.POSSESSION_OPTION);
    }
getOwnerShipOption() : Array<IOption> {
        return this.cloneOptions(PropService.OWNERSHIP_OPTION);
    }
getConfigOption() : Array<IOption> {
        return this.cloneOptions(PropService.CONFIG_OPTION);
    }
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
    getareaUnitOption() : Array<IOption> {
        return this.cloneOptions(PropService.AREAUNIT_OPTION);
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

    getAmenitiesMenu(propertyType : String): Array<PropertyType> {
      if(propertyType==='RENT')
      {
      return PropService.PROPERTY_TYPE_RENT_MENU;
      }
      if(propertyType==='PG')
      {
      return PropService.PROPERTY_TYPE_PG_MENU;
      }
        return PropService.AMENITES_SELL_MENU;
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
