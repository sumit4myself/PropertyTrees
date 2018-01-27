import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegComponent} from './reg.component';

const routes: Routes = [
  {
    path: '',
    component: RegComponent,
    data: {
      title: 'Registration'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegRoutingModule { }
