import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exclusive-selections',
  templateUrl: './exclusive-selections.component.html',
  styleUrls: ['./exclusive-selections.component.scss']
})
export class ExclusiveSelectionsComponent implements OnInit {
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
    <mat-button-toggle-group #group="matButtonToggleGroup">
      <mat-button-toggle value="left">
        <mat-icon>format_align_left</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="center">
        <mat-icon>format_align_center</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="right">
        <mat-icon>format_align_right</mat-icon>
      </mat-button-toggle>
      <mat-button-toggle value="justify" disabled>
        <mat-icon>format_align_justify</mat-icon>
      </mat-button-toggle>
    </mat-button-toggle-group>
    <div class="example-selected-value">Selected value: {{group.value}}</div>
`;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Exclusive selection
     */
    @Component({
      selector: 'button-toggle-exclusive-example',
      templateUrl: 'button-toggle-exclusive-example.html',
      styleUrls: ['button-toggle-exclusive-example.css'],
    })
    export class ButtonToggleExclusiveExample {}
    `;

    this.cssCode = `
    .example-selected-value {
      margin: 15px 0;
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
