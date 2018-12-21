import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-startdate',
  templateUrl: './datepicker-startdate.component.html',
  styleUrls: ['./datepicker-startdate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerStartdateComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  startDate = new Date(1990, 0, 1);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <input matInput [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker startView="year" [startAt]="startDate"></mat-datepicker>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Datepicker start date */
    @Component({
      selector: 'datepicker-start-view-example',
      templateUrl: 'datepicker-start-view-example.html',
      styleUrls: ['datepicker-start-view-example.css'],
    })
    export class DatepickerStartViewExample {
      startDate = new Date(1990, 0, 1);
    }
    `;

    this.cssCode = `
    /** No CSS for this example */
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
