import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-architect',
  templateUrl: './architect.component.html',
  styleUrls: ['./architect.component.css']
})
export class ArchitectComponent implements OnInit {

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
