import { Injectable } from '@angular/core';
import {IOption} from 'ng-select';
import { Http, Response, Headers } from '@angular/http';

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

getBannerData(): Promise<IOption[]> {
        return this.http.get("http://localhost:9001/v1/property/banner?type=STRIP").toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
    }

getGalleryData(): Promise<IOption[]> {
        return this.http.get("http://localhost:9001/v1/property/banner?type=SIDE").toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
    var resArray= new Array();
      var obj= res.json();
      return obj.content.map(objcts => ( {value:objcts.photo.url, label:objcts.id} ));
    }

    private handleErrorPromise (error: Response | any) {
  console.error(error.message || error);
  return Promise.reject(error.message || error);
    }

  constructor(private http:Http) { }

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