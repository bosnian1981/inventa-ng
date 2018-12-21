import { RouterModule } from '@angular/router';
import { MaterialComponent } from 'pages/icons/material/material.component';
import { LineAwesomeComponent } from './line-awesome/line-awesome.component';
import { NgModule } from '@angular/core';

export const routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  {
    path: 'material',
    component: MaterialComponent,
    data: { breadcrumb: 'Material Icons' }
  },
  {
    path: 'line-awesome',
    component: LineAwesomeComponent,
    data: { breadcrumb: 'Line Awesome Icons' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule {}
