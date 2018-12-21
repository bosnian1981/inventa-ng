import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss']
})
export class IconButtonsComponent implements OnInit {
  

  htmlCode = `
  <div class="button-row">
    <button mat-icon-button>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="primary">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="accent">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button color="warn">
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <button mat-icon-button disabled>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
  </div>`;

  tsCode = `
  import {Component} from '@angular/core';

  /**
  * @title Button varieties
  */
  @Component({
    selector: 'button-types-example',
    templateUrl: 'button-types-example.html',
    styleUrls: ['button-types-example.css'],
  })
  export class ButtonTypesExample {}`;

  cssCode = `
  .button-row button,
  .button-row a {
    margin-right: 8px;
  }`;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {}

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
