import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tooltip-with-custom-class',
  templateUrl: './tooltip-with-custom-class.component.html',
  styleUrls: ['./tooltip-with-custom-class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipWithCustomClassComponent implements OnInit {
  
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
        matTooltipClass="example-tooltip-red"
        aria-label="Button that shows a red tooltip"
        class="example-button">
    Red-tooltip Action
    </button>
    `;

    this.tsCode = `
    import {Component, ViewEncapsulation} from '@angular/core';

    /**
     * @title Tooltip that can have a custom class applied.
     */
    @Component({
      selector: 'tooltip-custom-class-example',
      templateUrl: 'tooltip-custom-class-example.html',
      styleUrls: ['tooltip-custom-class-example.css'],
      // Need to remove view encapsulation so that the custom tooltip style defined in
      // tooltip-custom-class-example.css will not be scoped to this component's view.
      encapsulation: ViewEncapsulation.None,
    })
    export class TooltipCustomClassExample {}
    `;

    this.cssCode = `
    .example-button {
      margin-top: 16px;
    }
    .example-tooltip-red {
      background: #b71c1c;
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
