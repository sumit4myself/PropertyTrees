import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
private search: String[] = [];
buyService()
{
 this.search=[];
 this.search.push("Buy1");
	this.search.push("Buy2");
	return this.search;
}

buyService1()
{
 this.search=[];
 this.search.push("com1");
	return this.search;
}


 constructor() { }
}
