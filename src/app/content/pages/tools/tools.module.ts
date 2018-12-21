import { DragDropConnectedSortingComponent } from './drag-drop/drag-drop-connected-sorting/drag-drop-connected-sorting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatTabsModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AlertConfigComponent } from './notifications/bootstrap-alerts/alert-config/alert-config.component';
import { BasicAlertComponent } from './notifications/bootstrap-alerts/basic-alert/basic-alert.component';
import { BootstrapAlertsComponent } from './notifications/bootstrap-alerts/bootstrap-alerts.component';
import { ClosableAlertComponent } from './notifications/bootstrap-alerts/closable-alert/closable-alert.component';
import { CustomAlertComponent } from './notifications/bootstrap-alerts/custom-alert/custom-alert.component';
import { SelfClosingAlertComponent } from './notifications/bootstrap-alerts/self-closing-alert/self-closing-alert.component';
import { ModalBasicComponent } from './notifications/modals/modal-basic/modal-basic.component';
import { ModalConfigComponent } from './notifications/modals/modal-config/modal-config.component';
import { ModalOptionsComponent } from './notifications/modals/modal-options/modal-options.component';
import { ModalsComponent } from './notifications/modals/modals.component';
import { ToastrComponent } from './notifications/toastr/toastr.component';
import { ToolsRoutingModule } from './tools.routing';
import { DragDropPositionLockingComponent } from './drag-drop/drag-drop-position-locking/drag-drop-position-locking.component';
import { DragDropSortingComponent } from './drag-drop/drag-drop-sorting/drag-drop-sorting.component';
import { DragDropBasicComponent } from './drag-drop/drag-drop-basic/drag-drop-basic.component';
import { DragDropHorizontalSortingComponent } from './drag-drop/drag-drop-horizontal-sorting/drag-drop-horizontal-sorting.component';
import { DragDropCustomPreviewComponent } from './drag-drop/drag-drop-custom-preview/drag-drop-custom-preview.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    ToolsRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    ClipboardModule,
    HighlightModule
  ],
  declarations: [
    DragDropComponent,
    DragDropPositionLockingComponent,
    DragDropSortingComponent,
    DragDropBasicComponent,
    DragDropHorizontalSortingComponent,
    DragDropCustomPreviewComponent,
    DragDropConnectedSortingComponent,
    BootstrapAlertsComponent,
    BasicAlertComponent,
    ClosableAlertComponent,
    SelfClosingAlertComponent,
    CustomAlertComponent,
    AlertConfigComponent,
    ModalsComponent,
    ModalBasicComponent,
    ModalConfigComponent,
    ModalOptionsComponent,
    ToastrComponent
  ]
})
export class ToolsModule {}
