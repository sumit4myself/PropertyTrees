import { Injectable } from '@angular/core';

@Injectable()
export class PropertyFeatures {
	public powerBackup:String;
	public facig:String ;
	public  widthOfFacingRoad:number;
	public  facigMeasurement:number;
	public widthOfFacingUnit:String;
	public  typeOfFlooring:String;
	public  gatedSociety:boolean=false;
	public  cornerProperty:boolean=false;
	public  Description:String;
	public  amenities:Array<String>;
	public  municipalCorporation:boolean=false;
	public  borewall:boolean=false;
	public  park:boolean=false;
	public  mainRoad:boolean=false;
	public  club:boolean=false;
	public  pool:boolean=false;
	public  others:boolean=false;
constructor() { }
}