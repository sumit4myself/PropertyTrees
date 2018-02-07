import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';

@Injectable()
export class HomeService {
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

  public static readonly GALLERY_DATA: Array<IOption> = [
    { value:'assets/images/property-gallery/celebrity-serenity-s-150x100.gif', label:'1' },
    { value:'assets/images/property-gallery/amaravati-one-s-150x100.gif', label:'2' },
    { value:'assets/images/property-gallery/celebrity-sqaure-s-150x100.gif', label:'3' },
    { value:'assets/images/property-gallery/claritas-anika-s-1-150x100.gif', label:'4' },
    { value:'assets/images/property-gallery/elan-miracle-s-150x100.gif', label:'5' },
    { value:'assets/images/property-gallery/fortune-butterfly-city-s-150x100.gif', label:'6' },
    { value:'assets/images/property-gallery/kmv-projects-s-150x100.gif', label:'7' },
    { value:'assets/images/property-gallery/kw-delhi6-hj-150x100.gif', label:'8' },
    { value:'assets/images/property-gallery/life-republic-new-s-150x100.gif', label:'9' },
    { value:'assets/images/property-gallery/mahagun-manorial-hj-150x100.gif', label:'10' },
    { value:'assets/images/property-gallery/mahagun-mantra-hj-150x100.gif', label:'11' },
    { value:'assets/images/property-gallery/celebrity-sqaure-s-150x100.gif', label:'12' },
    { value:'assets/images/property-gallery/claritas-anika-s-1-150x100.gif', label:'13' },
    { value:'assets/images/property-gallery/elan-miracle-s-150x100.gif', label:'14' },
    { value:'assets/images/property-gallery/kmv-projects-s-150x100.gif', label:'15' },
    { value:'assets/images/property-gallery/kw-delhi6-hj-150x100.gif', label:'16' },
    { value:'assets/images/property-gallery/life-republic-new-s-150x100.gif', label:'17' },
    { value:'assets/images/property-gallery/mahagun-manorial-hj-150x100.gif', label:'18' },
    { value:'assets/images/property-gallery/mahagun-mantra-hj-150x100.gif', label:'19' },
    { value:'assets/images/property-gallery/amaravati-one-s-150x100.gif', label:'20' }
    
  ];

  constructor() { }
  getGalleryData() : Array<IOption> {
        return HomeService.GALLERY_DATA;
    }

getDealerData() : Array<DealerDetails> {
        return HomeService.DEALER_DATA;
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