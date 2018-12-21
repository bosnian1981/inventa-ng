import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes = [
  { path: '', redirectTo: 'google-maps', pathMatch: 'full' },
  {
    path: 'google-maps',
    component: GoogleMapsComponent,
    data: { breadcrumb: 'Google Maps' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule {}
