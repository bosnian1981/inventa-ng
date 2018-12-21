import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {
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
    <mat-icon style="margin-right: 20px">home</mat-icon>
    <mat-icon style="margin-right: 20px">alarm</mat-icon>
    <mat-icon style="margin-right: 20px">backup</mat-icon>
    <mat-icon>delete</mat-icon>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic icons
     */
    @Component({
      selector: 'icon-overview-example',
      templateUrl: 'icon-overview-example.html',
      styleUrls: ['icon-overview-example.css'],
    })
    export class IconOverviewExample {}
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
