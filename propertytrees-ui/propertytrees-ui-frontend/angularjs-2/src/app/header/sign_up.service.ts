import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  constructor(private _http:Http) { } // private means within the class only use.
  singUpUsers(info){
      console.log(info);
    return this._http.post("http://localhost:9001/v1/user/register",info) 
      .map(()=>"");
  }
  loginUser(info){
      return this._http.post("#",info)
      .map(()=>"");
  }

}

