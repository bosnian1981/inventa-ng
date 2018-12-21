import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarComponent } from './calendar.component';

export const routes = [
  { path: '', component: CalendarComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonToggleModule,
    FlatpickrModule.forRoot(),
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarComponent]
})
export class FullCalendarModule {}
