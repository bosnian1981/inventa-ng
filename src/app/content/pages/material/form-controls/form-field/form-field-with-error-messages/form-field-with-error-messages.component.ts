import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-with-error-messages',
  templateUrl: './form-field-with-error-messages.component.html',
  styleUrls: ['./form-field-with-error-messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldWithErrorMessagesComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Enter your email" [formControl]="email" required>
        <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
      </mat-form-field>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl, Validators} from '@angular/forms';

    /** @title Form field with error messages */
    @Component({
      selector: 'form-field-error-example',
      templateUrl: 'form-field-error-example.html',
      styleUrls: ['form-field-error-example.css'],
    })
    export class FormFieldErrorExample {
      email = new FormControl('', [Validators.required, Validators.email]);

      getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
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
