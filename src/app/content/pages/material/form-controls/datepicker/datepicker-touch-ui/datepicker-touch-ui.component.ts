import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-touch-ui',
  templateUrl: './datepicker-touch-ui.component.html',
  styleUrls: ['./datepicker-touch-ui.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerTouchUiComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-full-width">
      <input matInput [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker touchUi #picker></mat-datepicker>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Datepicker touch UI */
    @Component({
      selector: 'datepicker-touch-example',
      templateUrl: 'datepicker-touch-example.html',
      styleUrls: ['datepicker-touch-example.css'],
    })
    export class DatepickerTouchExample {}
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
