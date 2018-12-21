import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mini-fab-buttons',
  templateUrl: './mini-fab-buttons.component.html',
  styleUrls: ['./mini-fab-buttons.component.scss']
})
export class MiniFabButtonsComponent implements OnInit {
  htmlCode = `
  <div class="button-row">
  <button mat-mini-fab>Basic</button>
  <button mat-mini-fab color="primary">Primary</button>
  <button mat-mini-fab color="accent">Accent</button>
  <button mat-mini-fab color="warn">Warn</button>
  <button mat-mini-fab disabled>Disabled</button>
  <button mat-mini-fab>
    <mat-icon aria-label="Example icon-button with a heart icon">favorite</mat-icon>
  </button>
  <a mat-mini-fab routerLink=".">Link</a>
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
