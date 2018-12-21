import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-toolbar',
  templateUrl: './basic-toolbar.component.html',
  styleUrls: ['./basic-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicToolbarComponent implements OnInit {
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
    <mat-toolbar>My App</mat-toolbar>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic toolbar
     */
    @Component({
      selector: 'toolbar-overview-example',
      templateUrl: 'toolbar-overview-example.html',
      styleUrls: ['toolbar-overview-example.css'],
    })
    export class ToolbarOverviewExample {}
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
