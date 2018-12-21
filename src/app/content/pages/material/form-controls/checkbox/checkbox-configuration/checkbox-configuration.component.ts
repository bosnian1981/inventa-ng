import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkbox-configuration',
  templateUrl: './checkbox-configuration.component.html',
  styleUrls: ['./checkbox-configuration.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxConfigurationComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-card>
      <mat-card-content>
      <h2 class="example-h2">Checkbox configuration</h2>

      <section class="example-section">
        <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
        <mat-checkbox class="example-margin" [(ngModel)]="indeterminate">Indeterminate</mat-checkbox>
      </section>

      <section class="example-section">
        <label class="example-margin">Align:</label>
        <mat-radio-group [(ngModel)]="labelPosition">
          <mat-radio-button class="example-margin" value="after">After</mat-radio-button>
          <mat-radio-button class="example-margin" value="before">Before</mat-radio-button>
        </mat-radio-group>
      </section>

      <section class="example-section">
        <mat-checkbox class="example-margin" [(ngModel)]="disabled">Disabled</mat-checkbox>
      </section>
      </mat-card-content>
      </mat-card>

      <mat-card class="result">
      <mat-card-content>
      <h2 class="example-h2">Result</h2>

      <section class="example-section">
        <mat-checkbox
            class="example-margin"
            [(ngModel)]="checked"
            [(indeterminate)]="indeterminate"
            [labelPosition]="labelPosition"
            [disabled]="disabled">
          I'm a checkbox
        </mat-checkbox>
      </section>
      </mat-card-content>
      </mat-card>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Configurable checkbox
     */
    @Component({
      selector: 'checkbox-configurable-example',
      templateUrl: 'checkbox-configurable-example.html',
      styleUrls: ['checkbox-configurable-example.css'],
    })
    export class CheckboxConfigurableExample {
      checked = false;
      indeterminate = false;
      labelPosition = 'after';
      disabled = false;
    }
    `;

    this.cssCode = `
    .example-h2 {
      margin: 10px;
    }
    .example-section {
      display: flex;
      align-content: center;
      align-items: center;
      height: 60px;
    }
    .example-margin {
      margin: 0 10px;
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
