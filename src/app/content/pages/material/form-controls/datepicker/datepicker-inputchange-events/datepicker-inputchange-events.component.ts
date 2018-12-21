import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-datepicker-inputchange-events',
  templateUrl: './datepicker-inputchange-events.component.html',
  styleUrls: ['./datepicker-inputchange-events.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerInputchangeEventsComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
    <input matInput [matDatepicker]="picker" placeholder="Input & change events"
            (dateInput)="addEvent('input', $event)" (dateChange)="addEvent('change', $event)">
    <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <div class="example-events">
    <div *ngFor="let e of events">{{e}}</div>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {MatDatepickerInputEvent} from '@angular/material/datepicker';

    /** @title Datepicker input and change events */
    @Component({
      selector: 'datepicker-events-example',
      templateUrl: 'datepicker-events-example.html',
      styleUrls: ['datepicker-events-example.css'],
    })
    export class DatepickerEventsExample {
      events: string[] = [];
    }

    `;

    this.cssCode = `
    .example-events {
      width: 400px;
      height: 200px;
      border: 1px solid #555;
      overflow: auto;
    }
    `;
  }

  copy(type: string) {
    let code: string;
    if (type === 'html') {
      code = this.htmlCode;
    } else if (type === 'ts') {
      code = this.tsCode;
    } else if (type === 'css') {
      code = this.cssCode;
    }

    this._clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
