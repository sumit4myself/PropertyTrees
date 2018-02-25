import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  navigation_route(myroute)
  {
    console.log(JSON.stringify(myroute)); 
    if( myroute == 'customerSupport')
    {
         this.router.navigate(["/"+myroute,]);
    }
    else
    {
    this.router.navigate(["/",{data:JSON.stringify("home")}]);
    }
  }
  constructor(private router:Router) { }





  ngOnInit() {
  }

}
