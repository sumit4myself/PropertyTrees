import { Injectable } from '@angular/core';

@Injectable()
export class PropertyDetails {
public unitType: String;
	public  builtUpArea:number;
	public  bedrooms:number;
	public  bathrooms:number;
	public  balconies:number;
	public  poojaRoom:boolean=false;
	public  studyRoom:boolean=false;
	public  servantRoom:boolean=false;
	public  others:boolean=false;
	public  propertyOnFloor:number;
	public  totalFloors:number;
	public parkingType:String;
	public  projectName : String;
	public  locality : String;
	public  AllInclusive : boolean=false;
	public negotiable : boolean=false;
	public expectedPrice : number;
	public pricePerUnit : number;
	public  availability : String;
	public transactionType : String;
	public possessionBy : String;
	
	
constructor() { }
}