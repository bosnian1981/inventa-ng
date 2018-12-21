import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-chips',
  templateUrl: './basic-chips.component.html',
  styleUrls: ['./basic-chips.component.scss']
})
export class BasicChipsComponent implements OnInit {
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
    <mat-chip-list>
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip color="primary" selected>Primary fish</mat-chip>
      <mat-chip color="accent" selected>Accent fish</mat-chip>
    </mat-chip-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic chips
     */
    @Component({
      selector: 'chips-overview-example',
      templateUrl: 'chips-overview-example.html',
      styleUrls: ['chips-overview-example.css'],
    })
    export class ChipsOverviewExample {}
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
