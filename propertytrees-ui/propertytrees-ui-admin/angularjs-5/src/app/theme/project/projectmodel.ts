import { Injectable } from '@angular/core';
import {ProjectDetails, Location, Banner , Gallery, Plan, Specifications} from './projectDetails';

@Injectable()
export class ProjectModel {
type:String='SELL';
public isSubmitted:boolean=false;
name:String;
constructor(private details: ProjectDetails, private location : Location,public plan : Plan,private gallery : Gallery,private banner: Banner , private specifications : Specifications) { }
}