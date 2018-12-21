import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';
import { ClipboardModule } from 'ngx-clipboard';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { UserService } from 'shared/services/user.service';
import { SharedModule } from 'shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { GoTopComponent } from './go-top/go-top.component';
import { HeaderComponent } from './header/header.component';
import { FullScreenComponent } from './header/toolbar-left/full-screen/full-screen.component';
import { SearchComponent } from './header/toolbar-left/search/search.component';
import { ToolbarLeftComponent } from './header/toolbar-left/toolbar-left.component';
import { AlertsComponent } from './header/toolbar-right/alerts/alerts.component';
import { LanguagesComponent } from './header/toolbar-right/languages/languages.component';
import { MessagesComponent } from './header/toolbar-right/messages/messages.component';
import { ProfileComponent } from './header/toolbar-right/profile/profile.component';
import { TasksComponent } from './header/toolbar-right/tasks/tasks.component';
import { ToolbarRightComponent } from './header/toolbar-right/toolbar-right.component';
import { NavHService } from './navigation/nav-core/nav-h.service';
import { NavService } from './navigation/nav-core/nav.service';
import { NavHorizontalComponent } from './navigation/nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './navigation/nav-vertical/nav-vertical.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SettingsComponent } from './_settings/settings.component';
import { SettingsService } from './_settings/settings.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    PerfectScrollbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatRadioModule,
    MatProgressBarModule,
    MatBadgeModule,
    ClipboardModule,
    ClickOutsideModule,
    RouterModule
  ],
  declarations: [
    NavVerticalComponent,
    NavHorizontalComponent,
    HeaderComponent,
    SearchComponent,
    FullScreenComponent,
    ToolbarLeftComponent,
    ToolbarRightComponent,
    AlertsComponent,
    LanguagesComponent,
    MessagesComponent,
    ProfileComponent,
    TasksComponent,
    SubheaderComponent,
    FooterComponent,
    ChatComponent,
    SettingsComponent,
    GoTopComponent
  ],
  exports: [
    PerfectScrollbarModule,
    NavVerticalComponent,
    NavHorizontalComponent,
    HeaderComponent,
    SearchComponent,
    FullScreenComponent,
    ToolbarLeftComponent,
    ToolbarRightComponent,
    AlertsComponent,
    LanguagesComponent,
    MessagesComponent,
    ProfileComponent,
    TasksComponent,
    SubheaderComponent,
    FooterComponent,
    ChatComponent,
    SettingsComponent,
    GoTopComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    SettingsService,
    NavService,
    NavHService,
    UserService
  ]
})
export class LayoutModule {}
