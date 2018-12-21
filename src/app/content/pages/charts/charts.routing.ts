import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsJsComponent } from './charts-js/charts-js.component';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';

export const routes = [
  { path: '', redirectTo: 'charts-js', pathMatch: 'full' },
  {
    path: 'charts-js',
    component: ChartsJsComponent,
    data: { breadcrumb: 'Charts.js' }
  },
  {
    path: 'ngx-charts',
    component: NgxChartsComponent,
    data: { breadcrumb: 'Ngx-Charts' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {}
