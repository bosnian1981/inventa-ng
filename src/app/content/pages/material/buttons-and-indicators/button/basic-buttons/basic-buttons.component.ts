import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-buttons',
  templateUrl: './basic-buttons.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BasicButtonsComponent implements OnInit {

   // (fullScreen, remove, toggle)

  public htmlCode: string;

  tsCode: string;

  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <div class="button-row">
      <button>Basic</button>
      <button mat-button color="primary">Primary</button>
      <button mat-button color="accent">Accent</button>
      <button mat-button color="warn">Warn</button>
      <button mat-button disabled>Disabled</button>
      <a mat-button routerLink=".">Link</a>
    </div>`;

    this.tsCode = `
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

    this.cssCode = `
    .button-row button,
    .button-row a {
      margin-right: 8px;
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
