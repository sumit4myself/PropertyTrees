import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
  console.log("Inside Constructor");
  console.log(this.router.snapshot.params["data"]);
  }

  ngOnInit() {
  console.log("Init called");
  console.log(this.router.snapshot.params["data"]);
  }

}
