import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-radios',
  templateUrl: './basic-radios.component.html',
  styleUrls: ['./basic-radios.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicRadiosComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-radio-group>
      <mat-radio-button value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic radios
     */
    @Component({
      selector: 'radio-overview-example',
      templateUrl: 'radio-overview-example.html',
      styleUrls: ['radio-overview-example.css'],
    })
    export class RadioOverviewExample {}

    `;

    this.cssCode = `
    .mat-radio-button ~ .mat-radio-button {
      padding-right: 16px;
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
