import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-inputs',
  templateUrl: './basic-inputs.component.html',
  styleUrls: ['./basic-inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicInputsComponent implements OnInit {
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
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="Favorite food" value="Sushi">
      </mat-form-field>

      <mat-form-field class="example-full-width">
        <textarea matInput placeholder="Leave a comment"></textarea>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic Inputs
     */
    @Component({
      selector: 'input-overview-example',
      styleUrls: ['input-overview-example.css'],
      templateUrl: 'input-overview-example.html',
    })
    export class InputOverviewExample {}
    `;

    this.cssCode = `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .example-full-width {
      width: 100%;
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
