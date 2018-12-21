import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tooltip-manually-shown-hidden',
  templateUrl: './tooltip-manually-shown-hidden.component.html',
  styleUrls: ['./tooltip-manually-shown-hidden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipManuallyShownHiddenComponent implements OnInit {
  
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
      <span> Mouse over to </span>
      <button mat-button
              (mouseenter)="tooltip.show()"
              aria-label="Button that progamatically shows a tooltip on another button"
              class="example-action-button">
        show
      </button>
      <button mat-button
              (mouseenter)="tooltip.hide()"
              aria-label="Button that progamatically hides a tooltip on another button"
              class="example-action-button">
        hide
      </button>
      <button mat-button
              (mouseenter)="tooltip.toggle()"
              aria-label="Button that progamatically toggles a tooltip on another button to show/hide"
              class="example-action-button">
        toggle show/hide
      </button>
    </div>

    <button mat-raised-button #tooltip="matTooltip"
            matTooltip="Info about the action"
            matTooltipPosition="right"
            aria-tooltip="Button that displays and hides a tooltip triggered by other buttons">
      Action
    </button>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Tooltip that can be manually shown/hidden.
     */
    @Component({
      selector: 'tooltip-manual-example',
      templateUrl: 'tooltip-manual-example.html',
      styleUrls: ['tooltip-manual-example.css'],
    })
    export class TooltipManualExample {}

    `;

    this.cssCode = `
    .example-action-button {
      margin-top: 16px;
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
