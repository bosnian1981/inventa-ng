import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-with-clear-button',
  templateUrl: './input-with-clear-button.component.html',
  styleUrls: ['./input-with-clear-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputWithClearButtonComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  value = 'Clear me';

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-form-field">
      <input matInput type="text" placeholder="Clearable input" [(ngModel)]="value">
      <button mat-button *ngIf="value" matSuffix mat-icon-button aria-label="Clear" (click)="value=''">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Input with a clear button
     */
    @Component({
      selector: 'input-clearable-example',
      templateUrl: './input-clearable-example.html',
      styleUrls: ['./input-clearable-example.css'],
    })
    export class InputClearableExample {
      value = 'Clear me';
    }

    `;

    this.cssCode = `
    .example-form-field {
      width: 200px;
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
