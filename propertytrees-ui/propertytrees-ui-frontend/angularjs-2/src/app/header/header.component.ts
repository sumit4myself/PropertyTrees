import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
