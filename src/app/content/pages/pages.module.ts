import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutModule } from 'layout/layout.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from 'shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    LayoutModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    ClickOutsideModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule {}
