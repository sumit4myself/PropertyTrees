import {Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class SearchFilter
{
	type: String="rent";
	cityOption: Array<String>;
promiseCity: Promise<String[]>= this.getCity();

   onLinkClick(x,y)
{
	window.open("#/"+x+"?id="+y, "_blank");
}

onAdminPanel()
{
	window.open('https://google.com');
	
}
	getCity(): Promise<String[]> {
        return this.http.get("http://ec2-34-217-106-45.us-west-2.compute.amazonaws.com:9001/location/cities").toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
    var resArray= new Array();
      var obj= res.json();
      return obj.map(objcts => ( objcts.name ));
    }

    private handleErrorPromise (error: Response | any) {
  console.error(error.message || error);
  return Promise.reject(error.message || error);
    }
    constructor(private http:Http) {
this.promiseCity.then(    
           opt => this.cityOption= opt);
     }
}