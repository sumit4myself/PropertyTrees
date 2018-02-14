import { Injectable } from '@angular/core';
import {PropertyDetails} from './propDetails';
import {PropertyFeatures} from './propFeatures';

@Injectable()
export class PropModel {
type:String='SELL';
public isSubmitted:boolean=false;
slctd:String='O';
propType:String;
fileToUpload: File[];
constructor(private details: PropertyDetails, private features:PropertyFeatures) { }
}