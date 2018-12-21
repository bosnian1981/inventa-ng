import { MatTooltipModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps.routing';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpodxNXPSzwsQVPYT7EgVv_Wh-vJBCS-E'
    }),
    MapsRoutingModule
  ],
  declarations: [
    GoogleMapsComponent
  ]
})
export class MapsModule { }
