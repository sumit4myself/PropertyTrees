import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  constructor(private http: Http) { }
  isSuccess:boolean = false;
  confirmationMsg:string = "Successfully Registered"
  regData:object = {};

  saveRegistration = function(registration){
    //console.log("Reg Data :: "+JSON.stringify(registration));
    this.regData = {
      "name":       registration.userName,
      "email":      registration.email,
      "contactNo":  registration.mobileNo,
      "password":   registration.password
    }
  	
    this.http.post("http://localhost:9001/user/register/",this.regData).subscribe(
      (res: Response) => {
        this.isSuccess = true;
        registration = {};
      })
  }
	

  ngOnInit() {
  }

}
