import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-field-with-hints',
  templateUrl: './form-field-with-hints.component.html',
  styleUrls: ['./form-field-with-hints.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldWithHintsComponent implements OnInit {
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
      <mat-form-field hintLabel="Max 10 characters">
        <input matInput #input maxlength="10" placeholder="Enter some input">
        <mat-hint align="end">{{input.value?.length || 0}}/10</mat-hint>
      </mat-form-field>

      <mat-form-field>
        <mat-select placeholder="Select me">
          <mat-option value="option">Option</mat-option>
        </mat-select>
        <mat-hint align="end">Here's the dropdown arrow ^</mat-hint>
      </mat-form-field>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Form field with hints */
    @Component({
      selector: 'form-field-hint-example',
      templateUrl: 'form-field-hint-example.html',
      styleUrls: ['form-field-hint-example.css'],
    })
    export class FormFieldHintExample {}

    `;

    this.cssCode = `
    .example-container {
      display: flex;
      flex-direction: column;
    }
    .example-container > * {
      width: 100%;
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
