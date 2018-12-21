import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-theming',
  templateUrl: './form-field-theming.component.html',
  styleUrls: ['./form-field-theming.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldThemingComponent implements OnInit {
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
        color: 'primary',
        fontSize: [16, Validators.min(10)],
      });
    }

    getFontSize() {
      return Math.max(10, this.options.value.fontSize);
    }

  ngOnInit() {
    this.htmlCode = `
    <form class="example-container" [formGroup]="options" [style.fontSize.px]="getFontSize()">
      <mat-form-field [color]="options.value.color">
        <mat-select placeholder="Color" formControlName="color">
          <mat-option value="primary">Primary</mat-option>
          <mat-option value="accent">Accent</mat-option>
          <mat-option value="warn">Warn</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field [color]="options.value.color">
        <input matInput type="number" placeholder="Font size (px)" formControlName="fontSize" min="10">
        <mat-error *ngIf="options.get('fontSize')?.invalid">Min size: 10px</mat-error>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormBuilder, FormGroup, Validators} from '@angular/forms';

    /** @title Form field theming */
    @Component({
      selector: 'form-field-theming-example',
      templateUrl: 'form-field-theming-example.html',
      styleUrls: ['form-field-theming-example.css'],
    })
    export class FormFieldThemingExample {
      options: FormGroup;

      constructor(fb: FormBuilder) {
        this.options = fb.group({
          color: 'primary',
          fontSize: [16, Validators.min(10)],
        });
      }

      getFontSize() {
        return Math.max(10, this.options.value.fontSize);
      }
    }
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
