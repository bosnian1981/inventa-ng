import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-configurable-paginator',
  templateUrl: './configurable-paginator.component.html',
  styleUrls: ['./configurable-paginator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConfigurablePaginatorComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      List length:
      <input matInput [(ngModel)]="length">
    </mat-form-field>

    <mat-form-field>
      Page size:
      <input matInput [(ngModel)]="pageSize">
    </mat-form-field>
    <mat-form-field>
      Page size options:
      <input matInput
            [ngModel]="pageSizeOptions"
            (ngModelChange)="setPageSizeOptions($event)">
    </mat-form-field>

    <mat-paginator [length]="length"
                  [pageSize]="pageSize"
                  [pageSizeOptions]="pageSizeOptions"
                  (page)="pageEvent = $event">
    </mat-paginator>

    <div *ngIf="pageEvent">
      <h5>Page Change Event Properties</h5>
      <div>List length: {{pageEvent.length}}</div>
      <div>Page size: {{pageEvent.pageSize}}</div>
      <div>Page index: {{pageEvent.pageIndex}}</div>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {PageEvent} from '@angular/material';

    /**
     * @title Configurable paginator
     */
    @Component({
      selector: 'paginator-configurable-example',
      templateUrl: 'paginator-configurable-example.html',
      styleUrls: ['paginator-configurable-example.css'],
    })
    export class PaginatorConfigurableExample {
      // MatPaginator Inputs
      length = 100;
      pageSize = 10;
      pageSizeOptions: number[] = [5, 10, 25, 100];

      // MatPaginator Output
      pageEvent: PageEvent;

      setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }

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
