import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicListComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-list role="list">
      <mat-list-item role="listitem">Item 1</mat-list-item>
      <mat-list-item role="listitem">Item 2</mat-list-item>
      <mat-list-item role="listitem">Item 3</mat-list-item>
    </mat-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic list
     */
    @Component({
      selector: 'list-overview-example',
      templateUrl: 'list-overview-example.html',
      styleUrls: ['list-overview-example.css'],
    })
    export class ListOverviewExample {}

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
