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
  selector: 'app-select-with-custom-errorstatematcher',
  templateUrl: './select-with-custom-errorstatematcher.component.html',
  styleUrls: ['./select-with-custom-errorstatematcher.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWithCustomErrorstatematcherComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Choose one" [formControl]="selected" [errorStateMatcher]="matcher">
        <mat-option>Clear</mat-option>
        <mat-option value="valid">Valid option</mat-option>
        <mat-option value="invalid">Invalid option</mat-option>
      </mat-select>
      <mat-hint>Errors appear instantly!</mat-hint>
      <mat-error *ngIf="selected.hasError('required')">You must make a selection</mat-error>
      <mat-error *ngIf="selected.hasError('pattern') && !selected.hasError('required')">
        Your selection is invalid
      </mat-error>
    </mat-form-field>
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

    /** @title Select with a custom ErrorStateMatcher */
    @Component({
      selector: 'select-error-state-matcher-example',
      templateUrl: 'select-error-state-matcher-example.html',
      styleUrls: ['select-error-state-matcher-example.css'],
    })
    export class SelectErrorStateMatcherExample {
      selected = new FormControl('valid', [
        Validators.required,
        Validators.pattern('valid'),
      ]);

      matcher = new MyErrorStateMatcher();
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
