import { Injectable } from '@angular/core';
import {PropertyDetails} from './propDetails';
import {PropertyFeatures} from './propFeatures';

@Injectable()
export class PropModel {
type:String;
isSubmitted:boolean=false;
constructor(private details: PropertyDetails, private features:PropertyFeatures) { }
}