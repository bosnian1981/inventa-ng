import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-checkbox',
  templateUrl: './basic-checkbox.component.html',
  styleUrls: ['./basic-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicCheckboxComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-checkbox>Check me!</mat-checkbox>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic checkboxes
     */
    @Component({
      selector: 'checkbox-overview-example',
      templateUrl: 'checkbox-overview-example.html',
      styleUrls: ['checkbox-overview-example.css'],
    })
    export class CheckboxOverviewExample {}

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
