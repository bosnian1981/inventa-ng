import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab-group-with-dynamic-height',
  templateUrl: './tab-group-with-dynamic-height.component.html',
  styleUrls: ['./tab-group-with-dynamic-height.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithDynamicHeightComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group dynamicHeight>
      <mat-tab label="Short tab">
        <div class="example-small-box mat-elevation-z4">
          Small content
        </div>
      </mat-tab>
      <mat-tab label="Long tab">
        <div class="example-large-box mat-elevation-z4">
          Large content
        </div>
      </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Tag group with dynamic height based on tab contents
     */
    @Component({
      selector: 'tab-group-dynamic-height-example',
      templateUrl: 'tab-group-dynamic-height-example.html',
      styleUrls: ['tab-group-dynamic-height-example.css'],
    })
    export class TabGroupDynamicHeightExample {}

    `;

    this.cssCode = `
    .example-small-box, .example-large-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 16px;
      padding: 16px;
      border-radius: 8px;
    }
    .example-small-box {
      height: 100px;
      width: 100px;
    }
    .example-large-box {
      height: 300px;
      width: 300px;
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
