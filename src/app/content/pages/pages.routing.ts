import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { breadcrumb: '' }
      },
      {
        path: 'material',
        loadChildren: './material/material.module#MaterialModule',
        data: { breadcrumb: 'Material' }
      },
      {
        path: 'calendar',
        loadChildren: './apps/calendar/calendar.module#FullCalendarModule',
        data: { breadcrumb: 'Calendar' }
      },
      {
        path: 'ecommerce',
        loadChildren: './apps/ecommerce/ecommerce.module#EcommerceModule',
        data: { breadcrumb: 'Ecommerce' }
      },
      {
        path: 'mailbox',
        loadChildren: './apps/mailbox/mailbox.module#MailboxModule',
        data: { breadcrumb: 'Mailbox' }
      },
      {
        path: 'todo',
        loadChildren: './apps/to-do/to-do.module#ToDoModule',
        data: { breadcrumb: 'To-Do' }
      },
      {
        path: 'chat',
        loadChildren: './apps/chat/chat.module#ChatModule',
        data: { breadcrumb: 'Chat' }
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        data: { breadcrumb: 'User Profile' }
      },
      {
        path: 'blank',
        loadChildren: './blank/blank.module#BlankModule',
        data: { breadcrumb: 'Blank Page' }
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule',
        data: { breadcrumb: 'Icons' }
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
        data: { breadcrumb: 'Charts' }
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule',
        data: { breadcrumb: 'Maps' }
      },
      {
        path: 'tools',
        loadChildren: './tools/tools.module#ToolsModule',
        data: { breadcrumb: 'Tools' }
      },
      {
        path: 'documentation',
        loadChildren: './documentation/documentation.module#DocumentationModule',
        data: { breadcrumb: 'Documentation' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
