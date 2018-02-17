import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDetails {
public unitType: String="";
	public  builtUpArea:number;
	public  noOfRooms:number;
	public  bedrooms:String='0';
	public  bathrooms:String='0';
	public  balconies:String='0';
	public  isMoreRoom:boolean=false;
	public  poojaRoom:boolean=false;
	public  studyRoom:boolean=false;
	public  servantRoom:boolean=false;
	public  rentFamily:boolean=false;
	public  rentSingleMan:boolean=false;
	public  rentSingleWoman:boolean=false;
	public  others:boolean=false;
	public  propertyOnFloor:String='Ground';
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
	public  availability : String = "READY_TO_MOVE";
	public transactionType : String;
	public possessionBy : String;
	public plotArea : String;
	public areaUnit : String;
	public floorsAllowed : String;
	public configration : String;
	public superBuildArea : String;
	public supeAreaUnit : String;

	public buildUpArea : String;
	public BuildAreaUnit : String;
	public carpetArea : String;
	public carpetAreaUnit : String;
	public ownerShip : String;
	public maintenanceTime : String;
	public maintenanceAmount : String;
	public pricePerSelected : String;
	public lengthOfPlot : String;
	public lengthplotAreaUnit : String;
	public breadthOfPlot : String;
	public breadthplotAreaUnit : String;
	

constructor() { }
}