import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-datepicker-with-filter-validation',
  templateUrl: './datepicker-with-filter-validation.component.html',
  styleUrls: ['./datepicker-with-filter-validation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerWithFilterValidationComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-full-width">
      <input matInput [matDatepickerFilter]="myFilter" [matDatepicker]="picker" placeholder="Choose a date">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Datepicker with filter validation */
    @Component({
      selector: 'datepicker-filter-example',
      templateUrl: 'datepicker-filter-example.html',
      styleUrls: ['datepicker-filter-example.css'],
    })
    export class DatepickerFilterExample {
      myFilter = (d: Date): boolean => {
        const day = d.getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
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
