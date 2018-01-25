import { Injectable } from '@angular/core';

@Injectable()
export class PropertyFeatures {
	public powerBackup:String;
	public facig:String ;
	public  widthOfFacingRoad:number;
	public widthOfFacingUnit:String;
	public  typeOfFlooring:String;
	public  gatedSociety:boolean=false;
	public  Description:String;
	public  amenities:Array<String>;
constructor() { }
}