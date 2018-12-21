import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-using-tabs-with-custom-label-template',
  templateUrl: './using-tabs-with-custom-label-template.component.html',
  styleUrls: ['./using-tabs-with-custom-label-template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsingTabsWithCustomLabelTemplateComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group>
      <mat-tab>
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">thumb_up</mat-icon>
          First
        </ng-template>
        Content 1
      </mat-tab>

      <mat-tab>
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">thumb_up</mat-icon>
          Second
        </ng-template>
        Content 2
      </mat-tab>

      <mat-tab>
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">thumb_up</mat-icon>
          Third
        </ng-template>

        Content 3
      </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Using tabs with a custom label template
     */
    @Component({
      selector: 'tab-group-custom-label-example',
      templateUrl: 'tab-group-custom-label-example.html',
      styleUrls: ['tab-group-custom-label-example.css'],
    })
    export class TabGroupCustomLabelExample {}

    `;

    this.cssCode = `
    .example-tab-icon {
      margin-right: 8px;
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
