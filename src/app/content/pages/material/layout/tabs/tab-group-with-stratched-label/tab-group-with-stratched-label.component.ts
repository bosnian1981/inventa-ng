import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab-group-with-stratched-label',
  templateUrl: './tab-group-with-stratched-label.component.html',
  styleUrls: ['./tab-group-with-stratched-label.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithStratchedLabelComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group mat-stretch-tabs class="example-stretched-tabs mat-elevation-z4">
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Tab group with stretched labels
     */
    @Component({
      selector: 'tab-group-stretched-example',
      templateUrl: 'tab-group-stretched-example.html',
      styleUrls: ['tab-group-stretched-example.css'],
    })
    export class TabGroupStretchedExample {}

    `;

    this.cssCode = `
    .example-stretched-tabs {
      max-width: 800px;
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
