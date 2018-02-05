import { Injectable } from '@angular/core';

@Injectable()
export class DealerDataService {
public static readonly DEALER_DATA: Array<DealerDetails> = [
    {id:1,name: 'Indiprops overses services',city:'Delhi', image: 'assets/images/property-dealers/property-dealer1.jpeg', data : [
    {type:'Apartment',count:158 },{type:'House/Villa',count:15 },{type:'Land',count:2 }] },
    {id:2,name: 'STA Solutions',city:'Delhi', image: 'assets/images/property-dealers/property-dealer2.jpg', data : [
    {type:'Apartment',count:158 },{type:'House/Villa',count:15 },{type:'Land',count:2 }]},
    {id:3,name: 'ABC Builders',city:'Delhi', image: 'assets/images/property-dealers/property-dealer3.jpeg', data : [
    {type:'Apartment',count:158 },{type:'House/Villa',count:15 },{type:'Land',count:2 }]},
    {id:4,name: 'Sigma realtech',city:'Delhi', image: 'assets/images/property-dealers/property-dealer4.jpeg', data : [
    {type:'Apartment',count:158 },{type:'House/Villa',count:15 },{type:'Land',count:2 }]},
    {id:5,name: 'Axis Builcon',city:'Delhi', image: 'assets/images/property-dealers/property-dealer5.jpeg', data : [
    {type:'Apartment',count:80 },{type:'House/Villa',count:2 },{type:'Land',count:1 }]}
  ];
  constructor() { }
getDealerData() : Array<DealerDetails> {
        return DealerDataService.DEALER_DATA;
    }
}

@Injectable()
export class DealerDetails {
public id:number;
public name:String;
public city:String;
public image:String;
public data:Array<DealerData>;
  constructor() { }

}

@Injectable()
export class DealerData {
type:String;
count:number;
}