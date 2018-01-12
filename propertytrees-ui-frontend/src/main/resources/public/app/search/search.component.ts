import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
private search: String[] = [];
searchMethod(param)
{
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
else
{
	this.search=[];
	this.search.push("Dealer1");
	this.search.push("Dealer2");
	console.log(this.search);
}
	
}
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
