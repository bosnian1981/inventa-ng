
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatCheckboxModule,
  MatDialogModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';
import { SharedModule } from 'shared/shared.module';
import { SnackbarComponent } from 'pages/material/popups-and-modals/snackbar/snackbar.component';
import { TooltipComponent } from 'pages/material/popups-and-modals/tooltip/tooltip.component';
import { SharedMaterialModule } from 'pages/material/shared-material.module';
import {
  BottomSheetComponent,
  BottomSheetOverviewExampleSheet
} from './bottom-sheet/bottom-sheet.component';
import {
  DialogComponent,
  DialogOverviewExampleDialog
} from './dialog/dialog.component';
import { BasicSnackbarComponent } from './snackbar/basic-snackbar/basic-snackbar.component';
import {
  PizzaPartyComponent,
  SnackbarWithCustomComponentComponent
} from './snackbar/snackbar-with-custom-component/snackbar-with-custom-component.component';
import { BasicTooltipComponent } from './tooltip/basic-tooltip/basic-tooltip.component';
import { TooltipDemonstratesAutoHiddingComponent } from './tooltip/tooltip-demonstrates-auto-hidding/tooltip-demonstrates-auto-hidding.component';
import { TooltipManuallyShownHiddenComponent } from './tooltip/tooltip-manually-shown-hidden/tooltip-manually-shown-hidden.component';
import { TooltipThatCanBeDisabledComponent } from './tooltip/tooltip-that-can-be-disabled/tooltip-that-can-be-disabled.component';
import { TooltipWithChangingMessageComponent } from './tooltip/tooltip-with-changing-message/tooltip-with-changing-message.component';
import { TooltipWithCustomClassComponent } from './tooltip/tooltip-with-custom-class/tooltip-with-custom-class.component';
import { TooltipWithCustomPositionComponent } from './tooltip/tooltip-with-custom-position/tooltip-with-custom-position.component';
import { TooltipWithShowHideDelayComponent } from './tooltip/tooltip-with-show-hide-delay/tootip-with-show-hide-delay.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    MatBottomSheetModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  declarations: [
    // bottom sheet
    BottomSheetComponent,
    BottomSheetOverviewExampleSheet,
    // end - bottom sheet

    // dialog
    DialogComponent,
    DialogOverviewExampleDialog,
    // end - dialog

    // snackbar
    SnackbarComponent,
    BasicSnackbarComponent,
    SnackbarWithCustomComponentComponent,
    PizzaPartyComponent,
    // end - snackbar

    // tooltip
    TooltipComponent,
    BasicTooltipComponent,
    TooltipDemonstratesAutoHiddingComponent,
    TooltipManuallyShownHiddenComponent,
    TooltipThatCanBeDisabledComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithCustomPositionComponent,
    TooltipWithCustomClassComponent,
    TooltipWithShowHideDelayComponent
    // end - tooltip
  ],
  exports: [
    // bottom sheet
    BottomSheetComponent,
    BottomSheetOverviewExampleSheet,
    // end - bottom sheet

    // dialog
    DialogComponent,
    DialogOverviewExampleDialog,
    // end - dialog

    // snackbar
    SnackbarComponent,
    BasicSnackbarComponent,
    SnackbarWithCustomComponentComponent,
    PizzaPartyComponent,
    // end - snackbar

    // tooltip
    TooltipComponent,
    BasicTooltipComponent,
    TooltipDemonstratesAutoHiddingComponent,
    TooltipManuallyShownHiddenComponent,
    TooltipThatCanBeDisabledComponent,
    TooltipWithChangingMessageComponent,
    TooltipWithCustomClassComponent,
    TooltipWithCustomPositionComponent,
    TooltipWithShowHideDelayComponent
    // end - tooltip
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog,
    SnackbarWithCustomComponentComponent,
    PizzaPartyComponent
  ]
})
export class PopupsAndModalsModule {}
