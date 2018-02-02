import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router} from '@angular/router';
import {SearchFilter} from '../common/search.filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
private search: String[] = [];
private type: String="buy";

searchListMethod()
{
	console.log(JSON.stringify(this.searchFilter));
	this.router.navigate(["/searchList",{data:JSON.stringify(this.searchFilter)}]);

}
searchMethod(param)
{
this.searchFilter.type=param;
if(param=='buy')
{
	this.search=[];
	this.search=this.searchService.buyService();
	console.log(this.search);
}
else if(param=='rent')
{
	this.search=[];
	this.search.push("Rent1");
	this.search.push("Rent2");
	console.log(this.search);
}
else if(param=='projects')
{
	this.search=[];
	this.search.push("pROJECT1");
	this.search.push("Project2");
	console.log(this.search);
}
else if(param=='commercial')
{
	this.search=[];
	this.search.push("Comm1");
	this.search.push("Comm2");
	console.log(this.search);
}
else if(param=='astrologer')
{
	this.search=[];
	this.search.push("astrologer1");
	this.search.push("astrologer2");
	console.log(this.search);
}
else if(param=='architect')
{
	this.search=[];
	this.search.push("architect1");
	this.search.push("architect2");
	console.log(this.search);
}
	
}
  constructor(private searchService: SearchService, private router:Router, private searchFilter: SearchFilter) {
  
   }
	
  ngOnInit() {
  }

}
