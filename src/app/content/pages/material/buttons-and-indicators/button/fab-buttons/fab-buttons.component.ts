import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fab-buttons',
  templateUrl: './fab-buttons.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FabButtonsComponent implements OnInit {
  htmlCode = `
  <div class="button-row">
    <button mat-fab>Basic</button>
    <button mat-fab color="primary">Primary</button>
    <button mat-fab color="accent">Accent</button>
    <button mat-fab color="warn">Warn</button>
    <button mat-fab disabled>Disabled</button>
    <button mat-fab>
      <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
    </button>
    <a mat-fab routerLink=".">Link</a>
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
