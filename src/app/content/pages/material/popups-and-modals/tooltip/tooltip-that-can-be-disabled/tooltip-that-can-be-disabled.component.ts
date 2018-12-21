import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip-that-can-be-disabled',
  templateUrl: './tooltip-that-can-be-disabled.component.html',
  styleUrls: ['./tooltip-that-can-be-disabled.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipThatCanBeDisabledComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  disabled = new FormControl(false);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <button mat-raised-button
            matTooltip="Info about the action"
            [matTooltipDisabled]="disabled.value"
            aria-label="Button that displays a tooltip that can be programatically disabled">
      Action
    </button>

    <mat-checkbox [formControl]="disabled" class="example-disabled-checkbox">
      Tooltip disabled
    </mat-checkbox>

    `;

    this.tsCode = `
    iimport {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Tooltip that can be disabled
     */
    @Component({
      selector: 'tooltip-disabled-example',
      templateUrl: 'tooltip-disabled-example.html',
      styleUrls: ['tooltip-disabled-example.css'],
    })
    export class TooltipDisabledExample {
      disabled = new FormControl(false);
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
