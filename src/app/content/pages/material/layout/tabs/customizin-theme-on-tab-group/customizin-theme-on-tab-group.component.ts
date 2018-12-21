import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customizin-theme-on-tab-group',
  templateUrl: './customizin-theme-on-tab-group.component.html',
  styleUrls: ['./customizin-theme-on-tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomizinThemeOnTabGroupComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <div>
      <mat-button-toggle-group #colorToggle="matButtonToggleGroup"
                              value="primary"
                              aria-label="Change color">
        <mat-button-toggle value="primary"> Primary </mat-button-toggle>
        <mat-button-toggle value="accent"> Accent </mat-button-toggle>
      </mat-button-toggle-group>
      <span class="example-button-toggle-label"> Color </span>
    </div>

    <div>
      <mat-button-toggle-group #backgroundColorToggle="matButtonToggleGroup"
                              value="primary"
                              aria-label="Change color">
        <mat-button-toggle value="primary"> Primary </mat-button-toggle>
        <mat-button-toggle value="accent"> Accent </mat-button-toggle>
      </mat-button-toggle-group>
      <span class="example-button-toggle-label"> Background Color </span>
    </div>

    <mat-tab-group [color]="colorToggle.value" [backgroundColor]="backgroundColorToggle.value">
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Customizing the theme options on the tab group
     */
    @Component({
      selector: 'tab-group-theme-example',
      templateUrl: 'tab-group-theme-example.html',
      styleUrls: ['tab-group-theme-example.css'],
    })
    export class TabGroupThemeExample {}

    `;

    this.cssCode = `
    .example-button-toggle-label {
      display: inline-block;
      margin: 16px;
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
