import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: Http) { }

   loginData:object = {};
   isSuccess:boolean = false;

  userLogin = function(login){
    console.log("Login Data :: "+JSON.stringify(login));
    this.loginData = {
      "userName":       login.userName,
      "password":   login.password
    }
  	
    this.http.post("http://localhost:9001/user/login/",this.loginData).subscribe(
      (res: Response) => {
        this.isSuccess = true;
        
      })
  }

  ngOnInit() {
  }

}
