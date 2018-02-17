import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    data: {
      title: 'Variants of nav bar',
      icon: 'icon-layout-cta-right',
      caption: 'variants color of nav bar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
