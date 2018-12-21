import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-input-with-custom-errorstatematcher',
  templateUrl: './input-with-custom-errorstatematcher.component.html',
  styleUrls: ['./input-with-custom-errorstatematcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWithCustomErrorstatematcherComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="Email" [formControl]="emailFormControl"
              [errorStateMatcher]="matcher">
        <mat-hint>Errors appear instantly!</mat-hint>
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
    import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
    import {ErrorStateMatcher} from '@angular/material/core';

    /** Error when invalid control is dirty, touched, or submitted. */
    export class MyErrorStateMatcher implements ErrorStateMatcher {
      isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
      }
    }

    /** @title Input with a custom ErrorStateMatcher */
    @Component({
      selector: 'input-error-state-matcher-example',
      templateUrl: './input-error-state-matcher-example.html',
      styleUrls: ['./input-error-state-matcher-example.css'],
    })
    export class InputErrorStateMatcherExample {
      emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);

      matcher = new MyErrorStateMatcher();
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
