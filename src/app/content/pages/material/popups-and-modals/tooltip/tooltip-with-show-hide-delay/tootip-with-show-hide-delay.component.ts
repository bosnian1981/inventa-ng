import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tootip-with-show-hide-delay',
  templateUrl: './tootip-with-show-hide-delay.component.html',
  styleUrls: ['./tootip-with-show-hide-delay.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipWithShowHideDelayComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-user-input">
      <input matInput placeholder="Show delay (milliseconds)"
            type="number"
            aria-label="Adds a delay between hovering over the button and displaying the tooltip"
            [formControl]="showDelay">
    </mat-form-field>

    <mat-form-field class="example-user-input">
      <input matInput placeholder="Hide delay (milliseconds)"
            type="number"
            aria-label="Adds a delay between hovering away from the button and hiding the tooltip"
            [formControl]="hideDelay">
    </mat-form-field>

    <button mat-raised-button
            matTooltip="Info about the action"
            [matTooltipShowDelay]="showDelay.value"
            [matTooltipHideDelay]="hideDelay.value"
            aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
      Action
    </button>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Tooltip with a show and hide delay
     */
    @Component({
      selector: 'tooltip-delay-example',
      templateUrl: 'tooltip-delay-example.html',
      styleUrls: ['tooltip-delay-example.css'],
    })
    export class TooltipDelayExample {
      showDelay = new FormControl(1000);
      hideDelay = new FormControl(2000);
    }
    `;

    this.cssCode = `
    .example-user-input {
      display: block;
      width: 150px;
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
