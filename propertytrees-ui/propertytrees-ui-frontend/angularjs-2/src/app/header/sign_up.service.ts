import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  constructor(private _http:Http) { } // private means within the class only use.
  singUpUsers(info){
     // console.log(info);res => res.json()).subscribe(res => this.localVar = res
  this._http.post("http://localhost:9001/v1/user/register",info) 
      .map((data)=>{
          data.json()
          return console.log(data.json());
    });
  }
  loginUser(info){
      return this._http.post("#",info)
      .map(()=>"");
  }

}

