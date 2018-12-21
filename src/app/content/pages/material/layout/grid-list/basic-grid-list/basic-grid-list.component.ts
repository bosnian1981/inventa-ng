import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-grid-list',
  templateUrl: './basic-grid-list.component.html',
  styleUrls: ['./basic-grid-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicGridListComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile>1</mat-grid-tile>
      <mat-grid-tile>2</mat-grid-tile>
      <mat-grid-tile>3</mat-grid-tile>
      <mat-grid-tile>4</mat-grid-tile>
    </mat-grid-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic grid-list
     */
    @Component({
      selector: 'grid-list-overview-example',
      styleUrls: ['grid-list-overview-example.css'],
      templateUrl: 'grid-list-overview-example.html',
    })
    export class GridListOverviewExample {}

    `;

    this.cssCode = `
    at-grid-tile {
      background: lightblue;
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
