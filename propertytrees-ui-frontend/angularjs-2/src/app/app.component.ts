import { Component } from '@angular/core';
import {SearchFilter} from './common/search.filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [SearchFilter]

})
export class AppComponent {
  title = 'app works!';
}
