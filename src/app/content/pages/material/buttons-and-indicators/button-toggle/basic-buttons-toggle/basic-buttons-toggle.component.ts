import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-basic-buttons-toggle',
  templateUrl: './basic-buttons-toggle.component.html',
  styleUrls: ['./basic-buttons-toggle.component.scss']
})
export class BasicButtonsToggleComponent implements OnInit {
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
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>`;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic button-toggles
     */
    @Component({
      selector: 'button-toggle-overview-example',
      templateUrl: 'button-toggle-overview-example.html',
      styleUrls: ['button-toggle-overview-example.css'],
    })
    export class ButtonToggleOverviewExample {}
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
