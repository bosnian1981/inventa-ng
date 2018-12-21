import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inputs-in-form',
  templateUrl: './inputs-in-form.component.html',
  styleUrls: ['./inputs-in-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsInFormComponent implements OnInit {
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
        <input matInput placeholder="Company (disabled)" disabled value="Google">
      </mat-form-field>

      <table class="example-full-width" cellspacing="0"><tr>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="First name">
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="Long Last Name That Will Be Truncated">
        </mat-form-field></td>
      </tr></table>

      <p>
        <mat-form-field class="example-full-width">
          <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <textarea matInput placeholder="Address 2"></textarea>
        </mat-form-field>
      </p>

      <table class="example-full-width" cellspacing="0"><tr>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="City">
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="State">
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
          <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
        </mat-form-field></td>
      </tr></table>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Inputs in a form
     */
    @Component({
      selector: 'input-form-example',
      templateUrl: 'input-form-example.html',
      styleUrls: ['input-form-example.css'],
    })
    export class InputFormExample {}
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
