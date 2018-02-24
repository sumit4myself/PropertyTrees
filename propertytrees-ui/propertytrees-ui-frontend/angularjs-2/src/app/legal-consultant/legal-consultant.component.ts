import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-legal-consultant',
  templateUrl: './legal-consultant.component.html',
  styleUrls: ['./legal-consultant.component.css']
})
export class LegalConsultantComponent implements OnInit {

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
