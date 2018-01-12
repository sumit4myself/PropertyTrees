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
 constructor() { }
}
