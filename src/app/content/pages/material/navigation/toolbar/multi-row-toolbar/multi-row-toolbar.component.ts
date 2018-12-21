import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-multi-row-toolbar',
  templateUrl: './multi-row-toolbar.component.html',
  styleUrls: ['./multi-row-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MultiRowToolbarComponent implements OnInit {
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
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Custom Toolbar</span>
      </mat-toolbar-row>

      <mat-toolbar-row>
        <span>Second Line</span>
        <span class="example-spacer"></span>
        <mat-icon class="example-icon">verified_user</mat-icon>
      </mat-toolbar-row>

      <mat-toolbar-row>
        <span>Third Line</span>
        <span class="example-spacer"></span>
        <mat-icon class="example-icon">favorite</mat-icon>
        <mat-icon class="example-icon">delete</mat-icon>
      </mat-toolbar-row>
    </mat-toolbar>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Multi-row toolbar
     */
    @Component({
      selector: 'toolbar-multirow-example',
      templateUrl: 'toolbar-multirow-example.html',
      styleUrls: ['toolbar-multirow-example.css'],
    })
    export class ToolbarMultirowExample {}
    `;

    this.cssCode = `
    .example-icon {
      padding: 0 14px;
    }
    .example-spacer {
      flex: 1 1 auto;
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
