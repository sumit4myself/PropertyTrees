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
getBannerPromise : Promise<IOption[]>;
getBannerData: Array<IOption>;
galleryPromise : Promise<IOption[]>;
galleryData : Array<IOption>;
  constructor(private searchFilter: SearchFilter, private homeService:HomeService) { }
  ngOnInit() {
   this.galleryPromise = this.homeService.getGalleryData();
  this.galleryPromise.then(    
           opt => this.galleryData= opt);
           this.getBannerPromise = this.homeService.getBannerData();
  this.getBannerPromise.then(    
           opt => this.getBannerData= opt);
  }
}
