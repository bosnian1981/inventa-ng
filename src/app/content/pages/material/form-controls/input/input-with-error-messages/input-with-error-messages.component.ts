import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-with-error-messages',
  templateUrl: './input-with-error-messages.component.html',
  styleUrls: ['./input-with-error-messages.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWithErrorMessagesComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl">
        <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
          Please enter a valid email address
        </mat-error>
        <mat-error *ngIf="emailFormControl.hasError('required')">
          Email is <strong>required</strong>
        </mat-error>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl, Validators} from '@angular/forms';

    /**
     * @title Input with error messages
     */
    @Component({
      selector: 'input-errors-example',
      templateUrl: 'input-errors-example.html',
      styleUrls: ['input-errors-example.css'],
    })
    export class InputErrorsExample {
      emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);
    }
    `;

    this.cssCode = `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .example-full-width {
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
