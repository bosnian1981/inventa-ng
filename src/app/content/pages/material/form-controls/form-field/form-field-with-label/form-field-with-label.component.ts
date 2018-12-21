import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-field-with-label',
  templateUrl: './form-field-with-label.component.html',
  styleUrls: ['./form-field-with-label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldWithLabelComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  options: FormGroup;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    fb: FormBuilder
    ) {
      this.options = fb.group({
        hideRequired: false,
        floatLabel: 'auto',
      });
    }

  ngOnInit() {
    this.htmlCode = `
    <div class="example-container">
    <form class="example-container" [formGroup]="options">
      <mat-checkbox formControlName="hideRequired">Hide required marker</mat-checkbox>
      <div>
        <label>Float label: </label>
        <mat-radio-group formControlName="floatLabel">
          <mat-radio-button value="auto">Auto</mat-radio-button>
          <mat-radio-button value="always">Always</mat-radio-button>
          <mat-radio-button value="never">Never</mat-radio-button>
        </mat-radio-group>
      </div>
    </form>

    <mat-form-field
        [hideRequiredMarker]="options.value.hideRequired"
        [floatLabel]="options.value.floatLabel">
      <input matInput placeholder="Simple placeholder" required>
    </mat-form-field>

    <mat-form-field [floatLabel]="options.value.floatLabel">
      <mat-label>Both a label and a placeholder</mat-label>
      <input matInput placeholder="Simple placeholder">
    </mat-form-field>

    <mat-form-field
        [hideRequiredMarker]="options.value.hideRequired"
        [floatLabel]="options.value.floatLabel">
      <mat-select required>
        <mat-option>-- None --</mat-option>
        <mat-option value="option">Option</mat-option>
      </mat-select>
      <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>
    </mat-form-field>
  </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormBuilder, FormGroup} from '@angular/forms';

    /** @title Form field with label */
    @Component({
      selector: 'form-field-label-example',
      templateUrl: 'form-field-label-example.html',
      styleUrls: ['form-field-label-example.css'],
    })
    export class FormFieldLabelExample {
      options: FormGroup;

      constructor(fb: FormBuilder) {
        this.options = fb.group({
          hideRequired: false,
          floatLabel: 'auto',
        });
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
