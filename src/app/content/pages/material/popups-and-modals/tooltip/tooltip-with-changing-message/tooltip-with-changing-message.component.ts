import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip-with-changing-message',
  templateUrl: './tooltip-with-changing-message.component.html',
  styleUrls: ['./tooltip-with-changing-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipWithChangingMessageComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  message = new FormControl('Info about the action');

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-user-input">
      <input matInput placeholder="Tooltip message" [formControl]="message">
    </mat-form-field>

    <button mat-raised-button
            [matTooltip]="message.value"
            aria-label="Button that displays a tooltip with a custom message">
      Action
    </button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Tooltip with a changing message
     */
    @Component({
      selector: 'tooltip-message-example',
      templateUrl: 'tooltip-message-example.html',
      styleUrls: ['tooltip-message-example.css'],
    })
    export class TooltipMessageExample {
      message = new FormControl('Info about the action');
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
