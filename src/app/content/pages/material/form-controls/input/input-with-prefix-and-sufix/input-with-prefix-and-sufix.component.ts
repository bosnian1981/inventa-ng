import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-with-prefix-and-sufix',
  templateUrl: './input-with-prefix-and-sufix.component.html',
  styleUrls: ['./input-with-prefix-and-sufix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWithPrefixAndSufixComponent implements OnInit {
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
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <span matPrefix>+1 &nbsp;</span>
        <input type="tel" matInput placeholder="Telephone">
        <mat-icon matSuffix>mode_edit</mat-icon>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Inputs with prefixes and suffixes
     */
    @Component({
      selector: 'input-prefix-suffix-example',
      templateUrl: 'input-prefix-suffix-example.html',
      styleUrls: ['input-prefix-suffix-example.css'],
    })
    export class InputPrefixSuffixExample {}
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
