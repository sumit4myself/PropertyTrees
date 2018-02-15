import { Component, OnInit } from '@angular/core';
import {SearchFilter} from '../common/search.filter';
declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

openModal(){
$('#myModal').modal('show');
}
Ftoggle(){
  $('#forget').show();
  }

  Ftogglehide(){
    $('#forget').hide();
    }

  constructor(private searchFilter: SearchFilter) { }

  ngOnInit() {
  }

}
