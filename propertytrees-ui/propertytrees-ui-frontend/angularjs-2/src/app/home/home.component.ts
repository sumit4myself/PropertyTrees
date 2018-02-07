import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
import {HomeService, DealerDetails} from './home.service';
import {IOption} from 'ng-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
question:String;
onLinkClick(x,y)
{
	window.open(x+"?id="+y, "_blank");
}
dealerInitialData : Array<DealerDetails>=this.homeService.getDealerData();
galleryData : Array<IOption>=this.homeService.getGalleryData();
  constructor(private searchFilter: SearchFilter, private homeService:HomeService) { }
  ngOnInit() {
  
  }

}
