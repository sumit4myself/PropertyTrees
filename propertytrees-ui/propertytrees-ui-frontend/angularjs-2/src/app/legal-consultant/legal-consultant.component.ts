import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-legal-consultant',
  templateUrl: './legal-consultant.component.html',
  styleUrls: ['./legal-consultant.component.css']
})
export class LegalConsultantComponent implements OnInit {

  constructor(private router:ActivatedRoute) { 
	  console.log("Inside Constructor");
	  console.log(this.router.snapshot.params["data"]);
  }

  ngOnInit() {
  }

}
