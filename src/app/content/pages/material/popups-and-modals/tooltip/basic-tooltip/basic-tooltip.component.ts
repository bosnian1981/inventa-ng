import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-tooltip',
  templateUrl: './basic-tooltip.component.html',
  styleUrls: ['./basic-tooltip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicTooltipComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <button mat-raised-button
            matTooltip="Info about the action"
            aria-label="Button that displays a tooltip when focused or hovered over">
      Action
    </button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic tooltip
     */
    @Component({
      selector: 'tooltip-overview-example',
      templateUrl: 'tooltip-overview-example.html',
      styleUrls: ['tooltip-overview-example.css'],
    })
    export class TooltipOverviewExample {}

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
