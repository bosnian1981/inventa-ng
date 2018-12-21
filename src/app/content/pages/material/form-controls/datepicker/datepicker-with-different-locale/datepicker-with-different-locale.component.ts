import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-with-different-locale',
  templateUrl: './datepicker-with-different-locale.component.html',
  styleUrls: ['./datepicker-with-different-locale.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerWithDifferentLocaleComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private adapter: DateAdapter<any>
  ) {}

  french() {
    this.adapter.setLocale('fr');
  }

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <input matInput [matDatepicker]="dp" placeholder="Different locale">
      <mat-datepicker-toggle matSuffix [for]="dp"></mat-datepicker-toggle>
      <mat-datepicker #dp></mat-datepicker>
    </mat-form-field>

    <button mat-button (click)="french()">Dynamically switch to French</button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
    import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

    /** @title Datepicker with different locale */
    @Component({
      selector: 'datepicker-locale-example',
      templateUrl: 'datepicker-locale-example.html',
      styleUrls: ['datepicker-locale-example.css'],
      providers: [
        // The locale would typically be provided on the root module of your application. We do it at
        // the component level here, due to limitations of our example generation script.
        {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},

        // MomentDateAdapter and MAT_MOMENT_DATE_FORMATS can be automatically provided by importing
        // MatMomentDateModule in your applications root module. We provide it at the component level
        // here, due to limitations of our example generation script.
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
      ],
    })
    export class DatepickerLocaleExample {
      constructor(private adapter: DateAdapter<any>) {}

      french() {
        this.adapter.setLocale('fr');
      }
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
