import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab-group-with-headers-on-bottom',
  templateUrl: './tab-group-with-headers-on-bottom.component.html',
  styleUrls: ['./tab-group-with-headers-on-bottom.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithHeadersOnBottomComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group headerPosition="below">
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Tab group with the headers on the bottom
     */
    @Component({
      selector: 'tab-group-header-below-example',
      templateUrl: 'tab-group-header-below-example.html',
      styleUrls: ['tab-group-header-below-example.css'],
    })
    export class TabGroupHeaderBelowExample {}

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
