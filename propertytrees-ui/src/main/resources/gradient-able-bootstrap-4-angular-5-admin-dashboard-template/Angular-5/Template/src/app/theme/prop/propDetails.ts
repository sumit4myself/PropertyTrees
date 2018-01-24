import { Injectable } from '@angular/core';

@Injectable()
export class PropertyDetails {
public unitType: String;
	public  builtUpArea:number;
	public  bedrooms:number;
	public  bathrooms:number;
	public  balconies:number;
	public  poojaRoom:boolean;
	public  studyRoom:boolean;
	public  servantRoom:boolean;
	public  others:boolean;
	public  propertyOnFloor:number;
	public  totalFloors:number;
	public parkingType:String;
	public  projectName : String;
	public  locality : String;
	public  AllInclusive : boolean;
	public negotiable : boolean;
	public expectedPrice : number;
	public pricePerUnit : number;
	public  availability : String;
	public transactionType : String;
	public possessionBy : String;
	
	
constructor() { }
}