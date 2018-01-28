import { Injectable } from '@angular/core';

@Injectable()
export class PropertyDetails {
public unitType: String;
	public  builtUpArea:number;
	public  bedrooms:String='0';
	public  bathrooms:String='0';
	public  balconies:String='0';
	public  poojaRoom:boolean=false;
	public  studyRoom:boolean=false;
	public  servantRoom:boolean=false;
	public  others:boolean=false;
	public  propertyOnFloor:number;
	public  totalFloors:String='4';
	public parkingType:String;
	public  noOfCoverParking:String='0';
	public  noOfOpenParking:String='4';
	public  projectName : String;
	public  locality : String;
	public  AllInclusive : boolean=false;
	public  noParking : boolean=false;
	public  coverParking : boolean=false;
	public  openParking : boolean=false;
	public negotiable : boolean=false;
	public expectedPrice : number;
	public pricePerUnit : number;
	public  availability : String;
	public transactionType : String;
	public possessionBy : String;
	
	
constructor() { }
}