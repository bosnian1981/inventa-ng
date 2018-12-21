import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-expansion-panel',
  templateUrl: './basic-expansion-panel.component.html',
  styleUrls: ['./basic-expansion-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicExpansionPanelComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  panelOpenState = false;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            Personal data
          </mat-panel-title>
          <mat-panel-description>
            Type your name and age
          </mat-panel-description>
        </mat-expansion-panel-header>

        <mat-form-field>
          <input matInput placeholder="First name">
        </mat-form-field>

        <mat-form-field>
          <input matInput placeholder="Age">
        </mat-form-field>
      </mat-expansion-panel>
      <mat-expansion-panel (opened)="panelOpenState = true"
                          (closed)="panelOpenState = false">
        <mat-expansion-panel-header>
          <mat-panel-title>
            Self aware panel
          </mat-panel-title>
          <mat-panel-description>
            Currently I am {{panelOpenState ? 'open' : 'closed'}}
          </mat-panel-description>
        </mat-expansion-panel-header>
        <p>I'm visible because I am open</p>
      </mat-expansion-panel>
    </mat-accordion>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic expansion panel
     */
    @Component({
      selector: 'expansion-overview-example',
      templateUrl: 'expansion-overview-example.html',
      styleUrls: ['expansion-overview-example.css'],
    })
    export class ExpansionOverviewExample {
      panelOpenState = false;
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
