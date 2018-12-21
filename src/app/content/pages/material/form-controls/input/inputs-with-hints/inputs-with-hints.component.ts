import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inputs-with-hints',
  templateUrl: './inputs-with-hints.component.html',
  styleUrls: ['./inputs-with-hints.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsWithHintsComponent implements OnInit {

  
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
        <input matInput #message maxlength="256" placeholder="Message">
        <mat-hint align="start"><strong>Don't disclose personal info</strong> </mat-hint>
        <mat-hint align="end">{{message.value.length}} / 256</mat-hint>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Input with hints
     */
    @Component({
      selector: 'input-hint-example',
      templateUrl: 'input-hint-example.html',
      styleUrls: ['input-hint-example.css'],
    })
    export class InputHintExample {}

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
