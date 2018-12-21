import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DbFake } from './data/dbFake';
import { ToggleNavVerticalDirective } from './directives/toggle-nav-vertical.directive';
import { AlertService } from './services/alert.service';
import { AuditLogsService } from './services/audit-logs.service';
import { ChatService } from './services/chat.service';
import { ComponentCommunicationService } from './services/component-communication.service';
import { LanguagesService } from './services/languages.service';
import { MessagesService } from './services/messages.service';
import { StatisticsService } from './services/statistics.service';
import { TicketService } from './services/ticket.service';
import { TodoService } from './services/todo.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(DbFake)
  ],
  declarations: [DeleteDialogComponent, ToggleNavVerticalDirective],
  providers: [
    ComponentCommunicationService,
    UserService,
    ChatService,
    AlertService,
    LanguagesService,
    TodoService,
    TicketService,
    AuditLogsService,
    MessagesService,
    StatisticsService
    ],
  exports: [DeleteDialogComponent, ToggleNavVerticalDirective]
})
export class SharedModule { }
