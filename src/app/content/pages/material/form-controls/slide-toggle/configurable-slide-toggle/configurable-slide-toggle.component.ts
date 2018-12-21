import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-configurable-slide-toggle',
  templateUrl: './configurable-slide-toggle.component.html',
  styleUrls: ['./configurable-slide-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurableSlideToggleComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  color = 'accent';
  checked = false;
  disabled = false;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-card>
      <mat-card-content>
        <h2 class="example-h2">Slider configuration</h2>

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
          <mat-checkbox class="example-margin" [(ngModel)]="checked">Checked</mat-checkbox>
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
          <mat-slide-toggle
              class="example-margin"
              [color]="color"
              [checked]="checked"
              [disabled]="disabled">
            Slide me!
          </mat-slide-toggle>
        </section>
      </mat-card-content>
    </mat-card>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Configurable slide-toggle
     */
    @Component({
      selector: 'slide-toggle-configurable-example',
      templateUrl: 'slide-toggle-configurable-example.html',
      styleUrls: ['slide-toggle-configurable-example.css'],
    })
    export class SlideToggleConfigurableExample {
      color = 'accent';
      checked = false;
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
      margin: 10px;
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
