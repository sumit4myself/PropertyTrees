import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';
@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {
  navigation_route(myroute)
  {
    console.log(JSON.stringify(myroute)); 
    if( myroute == 'customerSupport')
    {
         this.router.navigate(["/"+myroute,{data:JSON.stringify(myroute)}]);
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
