import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTooltipModule
} from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { QuillModule } from 'ngx-quill';
import { AuditLogsService } from 'shared/services/audit-logs.service';
import { MessagesService } from 'shared/services/messages.service';
import { TicketService } from 'shared/services/ticket.service';
import { TodoService } from 'shared/services/todo.service';
import { SharedModule } from 'shared/shared.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { InfoBlocksComponent } from './analytics/info-blocks/info-blocks.component';
import { OsUsageComponent } from './analytics/os-usage/os-usage.component';
import { SalesComponent } from './analytics/sales/sales.component';
import { VisitorsComponent } from './analytics/visitors/visitors.component';
import { DashboardComponent } from './dashboard.component';
import { MarketingComponent } from './marketing/marketing.component';
import { RevenueComponent } from './marketing/revenue/revenue.component';
import { SessionsComponent } from './marketing/sessions/sessions.component';
import { SignupsComponent } from './marketing/signups/signups.component';
import { UsersComponent } from './marketing/users/users.component';
import { TodoComponent } from './todo/todo.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxChartsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatProgressBarModule,
    QuillModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    DashboardComponent,
    InfoBlocksComponent,
    OsUsageComponent,
    AnalyticsComponent,
    MarketingComponent,
    UsersComponent,
    SignupsComponent,
    SessionsComponent,
    RevenueComponent,
    TodoComponent,
    SalesComponent,
    VisitorsComponent
  ],
  providers: [
    AuditLogsService,
    MessagesService,
    TicketService,
    AuditLogsService,
    TodoService
  ]
})
export class DashboardModule {}
