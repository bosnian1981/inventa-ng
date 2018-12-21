import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-select-with-2-way-binding',
  templateUrl: './select-with-2-way-binding.component.html',
  styleUrls: ['./select-with-2-way-binding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWith2WayBindingComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  selected = 'option2';

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select [(value)]="selected">
        <mat-option>None</mat-option>
        <mat-option value="option1">Option 1</mat-option>
        <mat-option value="option2">Option 2</mat-option>
        <mat-option value="option3">Option 3</mat-option>
      </mat-select>
    </mat-form-field>

    <p>You selected: {{selected}}</p>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /** @title Select with 2-way value binding */
    @Component({
      selector: 'select-value-binding-example',
      templateUrl: 'select-value-binding-example.html',
      styleUrls: ['select-value-binding-example.css'],
    })
    export class SelectValueBindingExample {
      selected = 'option2';
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
