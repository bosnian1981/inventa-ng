import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-disabled-datepicker',
  templateUrl: './disabled-datepicker.component.html',
  styleUrls: ['./disabled-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisabledDatepickerComponent implements OnInit {
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
    <p>
      <mat-form-field>
        <input matInput [matDatepicker]="dp1" placeholder="Completely disabled" disabled>
        <mat-datepicker-toggle matSuffix [for]="dp1"></mat-datepicker-toggle>
        <mat-datepicker #dp1></mat-datepicker>
      </mat-form-field>
    </p>

    <p>
      <mat-form-field>
        <input matInput [matDatepicker]="dp2" placeholder="Popup disabled">
        <mat-datepicker-toggle matSuffix [for]="dp2" disabled></mat-datepicker-toggle>
        <mat-datepicker #dp2></mat-datepicker>
      </mat-form-field>
    </p>

    <p>
      <mat-form-field>
        <input matInput [matDatepicker]="dp3" placeholder="Input disabled" disabled>
        <mat-datepicker-toggle matSuffix [for]="dp3"></mat-datepicker-toggle>
        <mat-datepicker #dp3 disabled="false"></mat-datepicker>
      </mat-form-field>
    </p>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Disabled datepicker */
    @Component({
      selector: 'datepicker-disabled-example',
      templateUrl: 'datepicker-disabled-example.html',
      styleUrls: ['datepicker-disabled-example.css'],
    })
    export class DatepickerDisabledExample {}
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
