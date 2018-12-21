import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker-selected-value',
  templateUrl: './datepicker-selected-value.component.html',
  styleUrls: ['./datepicker-selected-value.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerSelectedValueComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <input matInput [matDatepicker]="picker1" placeholder="Angular forms" [formControl]="date">
      <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
      <mat-datepicker #picker1></mat-datepicker>
    </mat-form-field>

    <mat-form-field>
      <input matInput [matDatepicker]="picker2" placeholder="Angular forms (w/ deserialization)"
            [formControl]="serializedDate">
      <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
      <mat-datepicker #picker2></mat-datepicker>
    </mat-form-field>

    <mat-form-field>
      <input matInput [matDatepicker]="picker3" placeholder="Value binding" [value]="date.value">
      <mat-datepicker-toggle matSuffix [for]="picker3"></mat-datepicker-toggle>
      <mat-datepicker #picker3></mat-datepicker>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /** @title Datepicker selected value */
    @Component({
      selector: 'datepicker-value-example',
      templateUrl: 'datepicker-value-example.html',
      styleUrls: ['datepicker-value-example.css'],
    })
    export class DatepickerValueExample {
      date = new FormControl(new Date());
      serializedDate = new FormControl((new Date()).toISOString());
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
