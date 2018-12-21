import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DividerComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-list>
      <mat-list-item>Item 1</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Item 2</mat-list-item>
      <mat-divider></mat-divider>
      <mat-list-item>Item 3</mat-list-item>
    </mat-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic divider
     */
    @Component({
      selector: 'divider-overview-example',
      templateUrl: 'divider-overview-example.html',
      styleUrls: ['divider-overview-example.css'],
    })
    export class DividerOverviewExample {}

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
