import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
import { Router } from '@angular/router/src/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // navigation_route(myroute){
  //   console.log(myroute);
  // }
  navigation_route(myroute)
{
	console.log(JSON.stringify(myroute)); 
	if(myroute == 'about' || myroute == 'ourservices' ||  myroute == 'ourclients' ||  myroute == 'ourpricing' ||  myroute == 'contactus' ||  myroute == 'customerSupport')
	{
     	this.router.navigate(["/"+myroute,{data:JSON.stringify(myroute)}]);
	}
	else
	{
	this.router.navigate(["/",{data:JSON.stringify("home")}]);
	}
}

  constructor(private searchFilter: SearchFilter,private router:Router) { }

  ngOnInit() {
  }

}
