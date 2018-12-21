import { BootstrapAlertsComponent } from './notifications/bootstrap-alerts/bootstrap-alerts.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ModalsComponent } from './notifications/modals/modals.component';
import { ToastrComponent } from './notifications/toastr/toastr.component';

export const routes = [
  { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
  {
    path: 'drag-drop',
    component: DragDropComponent,
    data: { breadcrumb: 'Drag and Drop' }
  },
  {
    path: 'alerts',
    component: BootstrapAlertsComponent,
    data: { breadcrumb: 'Bootstrap Alerts' }
  },
  {
    path: 'modals',
    component: ModalsComponent,
    data: { breadcrumb: 'Modals' }
  },
  {
    path: 'toastr',
    component: ToastrComponent,
    data: { breadcrumb: 'Toastr' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule {}
