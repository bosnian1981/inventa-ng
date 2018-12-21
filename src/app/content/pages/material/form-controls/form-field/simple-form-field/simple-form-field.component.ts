import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-simple-form-field',
  templateUrl: './simple-form-field.component.html',
  styleUrls: ['./simple-form-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleFormFieldComponent implements OnInit {
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
    <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Input">
      </mat-form-field>

      <mat-form-field>
        <textarea matInput placeholder="Textarea"></textarea>
      </mat-form-field>

      <mat-form-field>
        <mat-select placeholder="Select">
          <mat-option value="option">Option</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Simple form field */
    @Component({
      selector: 'form-field-overview-example',
      templateUrl: 'form-field-overview-example.html',
      styleUrls: ['form-field-overview-example.css'],
    })
    export class FormFieldOverviewExample {}
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
