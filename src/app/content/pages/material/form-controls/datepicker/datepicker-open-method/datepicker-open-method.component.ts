import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-open-method',
  templateUrl: './datepicker-open-method.component.html',
  styleUrls: ['./datepicker-open-method.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerOpenMethodComponent implements OnInit {
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
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    <button mat-raised-button (click)="picker.open()">Open</button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Datepicker open method */
    @Component({
      selector: 'datepicker-api-example',
      templateUrl: 'datepicker-api-example.html',
      styleUrls: ['datepicker-api-example.css'],
    })
    export class DatepickerApiExample {}
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
