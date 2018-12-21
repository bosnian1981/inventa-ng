import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from 'shared/shared.module';
import { BadgeComponent } from 'pages/material/buttons-and-indicators/badge/badge.component';
import { BasicButtonsToggleComponent } from 'pages/material/buttons-and-indicators/button-toggle/basic-buttons-toggle/basic-buttons-toggle.component';
import { ButtonToggleComponent } from 'pages/material/buttons-and-indicators/button-toggle/button-toggle.component';
import { ExclusiveSelectionsComponent } from 'pages/material/buttons-and-indicators/button-toggle/exclusive-selections/exclusive-selections.component';
import { BasicButtonsComponent } from 'pages/material/buttons-and-indicators/button/basic-buttons/basic-buttons.component';
import { ButtonComponent } from 'pages/material/buttons-and-indicators/button/button.component';
import { FabButtonsComponent } from 'pages/material/buttons-and-indicators/button/fab-buttons/fab-buttons.component';
import { FlatButtonsComponent } from 'pages/material/buttons-and-indicators/button/flat-buttons/flat-buttons.component';
import { IconButtonsComponent } from 'pages/material/buttons-and-indicators/button/icon-buttons/icon-buttons.component';
import { MiniFabButtonsComponent } from 'pages/material/buttons-and-indicators/button/mini-fab-buttons/mini-fab-buttons.component';
import { RaisedButtonsComponent } from 'pages/material/buttons-and-indicators/button/raised-buttons/raised-buttons.component';
import { StrokedButtonsComponent } from 'pages/material/buttons-and-indicators/button/stroked-buttons/stroked-buttons.component';
import { BasicChipsComponent } from 'pages/material/buttons-and-indicators/chips/basic-chips/basic-chips.component';
import { ChipsComponent } from 'pages/material/buttons-and-indicators/chips/chips.component';
import { StackedChipsComponent } from 'pages/material/buttons-and-indicators/chips/stacked-chips/stacked-chips.component';
import { IconComponent } from 'pages/material/buttons-and-indicators/icon/icon.component';
import { ConfigurableProgressBarComponent } from 'pages/material/buttons-and-indicators/progress-bar/configurable-progress-bar/configurable-progress-bar.component';
import { DeterminateProgressBarComponent } from 'pages/material/buttons-and-indicators/progress-bar/determinate-progress-bar/determinate-progress-bar.component';
import { ProgressBarComponent } from 'pages/material/buttons-and-indicators/progress-bar/progress-bar.component';
import { BasicProgressSpinnerComponent } from 'pages/material/buttons-and-indicators/progress-spinner/basic-progress-spinner/basic-progress-spinner.component';
import { ProgressSpinnerConfigurableComponent } from 'pages/material/buttons-and-indicators/progress-spinner/progress-spinner-configurable/progress-spinner-configurable.component';
import { ProgressSpinnerComponent } from 'pages/material/buttons-and-indicators/progress-spinner/progress-spinner.component';
import { SharedMaterialModule } from 'pages/material/shared-material.module';
import { RipplesComponent } from './ripples/ripples.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SharedMaterialModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    MatCardModule,
    MatCheckboxModule,
    MatRippleModule
  ],
  declarations: [
    ButtonComponent,
    BasicButtonsComponent,
    RaisedButtonsComponent,
    StrokedButtonsComponent,
    FlatButtonsComponent,
    IconButtonsComponent,
    FabButtonsComponent,
    MiniFabButtonsComponent,
    ButtonToggleComponent,
    BasicButtonsToggleComponent,
    ExclusiveSelectionsComponent,
    BadgeComponent,
    ChipsComponent,
    BasicChipsComponent,
    StackedChipsComponent,
    IconComponent,
    ProgressSpinnerComponent,
    BasicProgressSpinnerComponent,
    ProgressSpinnerConfigurableComponent,
    ProgressBarComponent,
    DeterminateProgressBarComponent,
    ConfigurableProgressBarComponent,
    RipplesComponent
  ],
  exports: [
    ButtonComponent,
    BasicButtonsComponent,
    RaisedButtonsComponent,
    StrokedButtonsComponent,
    FlatButtonsComponent,
    IconButtonsComponent,
    FabButtonsComponent,
    MiniFabButtonsComponent,
    ButtonToggleComponent,
    BasicButtonsToggleComponent,
    ExclusiveSelectionsComponent,
    BadgeComponent,
    ChipsComponent,
    BasicChipsComponent,
    StackedChipsComponent,
    IconComponent,
    ProgressSpinnerComponent,
    BasicProgressSpinnerComponent,
    ProgressSpinnerConfigurableComponent,
    ProgressBarComponent,
    DeterminateProgressBarComponent,
    ConfigurableProgressBarComponent,
    RipplesComponent
  ]
})
export class ButtonsAndIndicatorsModule {}
