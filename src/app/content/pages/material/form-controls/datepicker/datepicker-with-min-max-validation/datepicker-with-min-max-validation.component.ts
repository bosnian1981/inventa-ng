import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-with-min-max-validation',
  templateUrl: './datepicker-with-min-max-validation.component.html',
  styleUrls: ['./datepicker-with-min-max-validation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerWithMinMaxValidationComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-full-width">
      <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Datepicker with min & max validation */
    @Component({
      selector: 'datepicker-min-max-example',
      templateUrl: 'datepicker-min-max-example.html',
      styleUrls: ['datepicker-min-max-example.css'],
    })
    export class DatepickerMinMaxExample {
      minDate = new Date(2000, 0, 1);
      maxDate = new Date(2020, 0, 1);
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
