import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-progress-spinner',
  templateUrl: './basic-progress-spinner.component.html',
  styleUrls: ['./basic-progress-spinner.component.scss']
})
export class BasicProgressSpinnerComponent implements OnInit {
   // (fullScreen, remove, toggle)

  public htmlCode: string;

  tsCode: string;

  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-spinner></mat-spinner>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic progress-spinner
     */
    @Component({
      selector: 'progress-spinner-overview-example',
      templateUrl: 'progress-spinner-overview-example.html',
      styleUrls: ['progress-spinner-overview-example.css'],
    })
    export class ProgressSpinnerOverviewExample {}
    `;

    this.cssCode = `
    /** No CSS for this example */
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
