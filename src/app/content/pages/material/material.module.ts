import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatatableModule } from 'pages/material/data-table/datatable.module';
import { MaterialRoutingModule } from 'pages/material/material.routing';
import { NavigationModule } from 'pages/material/navigation/navigation.module';
import { PopupsAndModalsModule } from 'pages/material/popups-and-modals/popups-and-modals.module';
import { ButtonsAndIndicatorsModule } from './buttons-and-indicators/buttons-and-indicators.module';
import { FormControlsModule } from './form-controls/form-controls.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    ButtonsAndIndicatorsModule,
    NavigationModule,
    FormControlsModule,
    DatatableModule,
    LayoutModule,
    PopupsAndModalsModule
  ],
  declarations: []
})
export class MaterialModule {}
