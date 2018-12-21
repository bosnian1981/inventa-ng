import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-progress-spinner-configurable',
  templateUrl: './progress-spinner-configurable.component.html',
  styleUrls: ['./progress-spinner-configurable.component.scss']
})
export class ProgressSpinnerConfigurableComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-card>
      <mat-card-content>
        <h2 class="example-h2">Progress spinner configuration</h2>

        <section class="example-section">
          <label class="example-margin">Color:</label>
          <mat-radio-group [(ngModel)]="color">
            <mat-radio-button class="example-margin" value="primary">
              Primary
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="accent">
              Accent
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="warn">
              Warn
            </mat-radio-button>
          </mat-radio-group>
        </section>

        <section class="example-section">
          <label class="example-margin">Mode:</label>
          <mat-radio-group [(ngModel)]="mode">
            <mat-radio-button class="example-margin" value="determinate">
              Determinate
            </mat-radio-button>
            <mat-radio-button class="example-margin" value="indeterminate">
              Indeterminate
            </mat-radio-button>
          </mat-radio-group>
        </section>

        <section class="example-section" *ngIf="mode === 'determinate'">
          <label class="example-margin">Progress:</label>
          <mat-slider class="example-margin" [(ngModel)]="value"></mat-slider>
        </section>
      </mat-card-content>
    </mat-card>
    <mat-card>
      <mat-card-content>
        <h2 class="example-h2">Result</h2>

        <mat-progress-spinner
            class="example-margin"
            [color]="color"
            [mode]="mode"
            [value]="value">
        </mat-progress-spinner>
      </mat-card-content>
    </mat-card>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Configurable progress spinner
     */
    @Component({
      selector: 'progress-spinner-configurable-example',
      templateUrl: 'progress-spinner-configurable-example.html',
      styleUrls: ['progress-spinner-configurable-example.css'],
    })
    export class ProgressSpinnerConfigurableExample {
      color = 'primary';
      mode = 'determinate';
      value = 50;
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
