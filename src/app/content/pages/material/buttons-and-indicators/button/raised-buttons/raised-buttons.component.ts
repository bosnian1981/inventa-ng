import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-raised-buttons',
  templateUrl: './raised-buttons.component.html',
  styleUrls: ['./raised-buttons.component.scss']
})
export class RaisedButtonsComponent implements OnInit {
  htmlCode = `
  <div class="button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button routerLink=".">Link</a>
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
