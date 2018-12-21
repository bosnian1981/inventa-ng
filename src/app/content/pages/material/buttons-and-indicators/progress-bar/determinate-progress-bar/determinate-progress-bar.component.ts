import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-determinate-progress-bar',
  templateUrl: './determinate-progress-bar.component.html',
  styleUrls: ['./determinate-progress-bar.component.scss']
})
export class DeterminateProgressBarComponent implements OnInit {
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
    <mat-progress-bar mode="determinate" value="40"></mat-progress-bar>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Determinate progress-bar
     */
    @Component({
      selector: 'progress-bar-determinate-example',
      templateUrl: 'progress-bar-determinate-example.html',
      styleUrls: ['progress-bar-determinate-example.css'],
    })
    export class ProgressBarDeterminateExample {}
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
