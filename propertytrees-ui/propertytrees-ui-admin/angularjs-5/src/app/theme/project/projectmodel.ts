import { Injectable } from '@angular/core';
import {ProjectDetails} from './projectDetails';
import {ProjectFeatures} from './projectFeatures';

@Injectable()
export class ProjectModel {
type:String='SELL';
public isSubmitted:boolean=false;
slctd:String='O';
propType:String;
constructor(private details: ProjectDetails, private features:ProjectFeatures) { }
}