import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
import {DealerDataService, DealerDetails} from './dealer-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DealerDataService]
})
export class HomeComponent implements OnInit {
onLinkClick(x,y)
{
	window.open(x+"?id="+y, "_blank");
}
dealerInitialData : Array<DealerDetails>=this.dealerDataService.getDealerData();
  constructor(private searchFilter: SearchFilter, private dealerDataService:DealerDataService) { }
  ngOnInit() {
  
  }

}
