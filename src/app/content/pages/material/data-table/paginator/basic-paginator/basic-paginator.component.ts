import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-paginator',
  templateUrl: './basic-paginator.component.html',
  styleUrls: ['./basic-paginator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicPaginatorComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-paginator [length]="100"
                [pageSize]="10"
                [pageSizeOptions]="[5, 10, 25, 100]">
    </mat-paginator>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Paginator
     */
    @Component({
      selector: 'paginator-overview-example',
      templateUrl: 'paginator-overview-example.html',
      styleUrls: ['paginator-overview-example.css'],
    })
    export class PaginatorOverviewExample {}
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
