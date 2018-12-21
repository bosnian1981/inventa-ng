import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-with-custom-panel-styling',
  templateUrl: './select-with-custom-panel-styling.component.html',
  styleUrls: ['./select-with-custom-panel-styling.component.scss'],
  // Encapsulation has to be disabled in order for the
  // component style to apply to the select panel.
  encapsulation: ViewEncapsulation.None,
})
export class SelectWithCustomPanelStylingComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  panelColor = new FormControl('red');

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Panel color" [formControl]="panelColor"
                  panelClass="example-panel-{{panelColor.value}}">
        <mat-option value="red">Red</mat-option>
        <mat-option value="green">Green</mat-option>
        <mat-option value="blue">Blue</mat-option>
      </mat-select>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component, ViewEncapsulation} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Select with custom panel styling
     */
    @Component({
      selector: 'select-panel-class-example',
      templateUrl: 'select-panel-class-example.html',
      styleUrls: ['select-panel-class-example.css'],
      // Encapsulation has to be disabled in order for the
      // component style to apply to the select panel.
      encapsulation: ViewEncapsulation.None,
    })
    export class SelectPanelClassExample {
      panelColor = new FormControl('red');
    }

    `;

    this.cssCode = `
    .example-panel-red .mat-select-content {
      background: rgba(255, 0, 0, 0.5);
    }
    .example-panel-green .mat-select-content {
      background: rgba(0, 255, 0, 0.5);
    }
    .example-panel-blue .mat-select-content {
      background: rgba(0, 0, 255, 0.5);
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
