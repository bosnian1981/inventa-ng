import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-field-with-prefix-and-sufix',
  templateUrl: './form-field-with-prefix-and-sufix.component.html',
  styleUrls: ['./form-field-with-prefix-and-sufix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormFieldWithPrefixAndSufixComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  hide = true;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Enter your password" [type]="hide ? 'password' : 'text'">
        <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>
      </mat-form-field>

      <mat-form-field>
        <input matInput placeholder="Amount" type="number" class="example-right-align">
        <span matPrefix>$&nbsp;</span>
        <span matSuffix>.00</span>
      </mat-form-field>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Form field with prefix & suffix */
    @Component({
      selector: 'form-field-prefix-suffix-example',
      templateUrl: 'form-field-prefix-suffix-example.html',
      styleUrls: ['form-field-prefix-suffix-example.css'],
    })
    export class FormFieldPrefixSuffixExample {
      hide = true;
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
    .example-right-align {
      text-align: right;
    }
    input.example-right-align::-webkit-outer-spin-button,
    input.example-right-align::-webkit-inner-spin-button {
      display: none;
    }
    input.example-right-align {
      -moz-appearance: textfield;
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
