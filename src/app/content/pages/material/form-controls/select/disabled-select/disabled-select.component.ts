import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disabled-select',
  templateUrl: './disabled-select.component.html',
  styleUrls: ['./disabled-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisabledSelectComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  disableSelect = new FormControl(false);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <p>
      <mat-checkbox [formControl]="disableSelect">Disable select</mat-checkbox>
    </p>
    <p>
      <mat-form-field>
        <mat-select placeholder="Choose an option" [disabled]="disableSelect.value">
          <mat-option value="option1">Option 1</mat-option>
          <mat-option value="option2" disabled>Option 2 (disabled)</mat-option>
          <mat-option value="option3">Option 3</mat-option>
        </mat-select>
      </mat-form-field>
    </p>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /** @title Disabled select */
    @Component({
      selector: 'select-disabled-example',
      templateUrl: 'select-disabled-example.html',
      styleUrls: ['select-disabled-example.css'],
    })
    export class SelectDisabledExample {
      disableSelect = new FormControl(false);
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
