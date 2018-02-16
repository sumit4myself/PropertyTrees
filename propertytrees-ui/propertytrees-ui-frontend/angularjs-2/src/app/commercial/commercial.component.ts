import { Component, OnInit } from '@angular/core';

import { CommercialService } from './commercial.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
  providers: [CommercialService]
})
export class CommercialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

