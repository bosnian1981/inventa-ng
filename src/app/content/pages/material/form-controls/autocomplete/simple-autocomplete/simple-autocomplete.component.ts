import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-autocomplete',
  templateUrl: './simple-autocomplete.component.html',
  styleUrls: ['./simple-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SimpleAutocompleteComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of options" [value]="option">
            {{option}}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Simple autocomplete
     */
    @Component({
      selector: 'autocomplete-simple-example',
      templateUrl: 'autocomplete-simple-example.html',
      styleUrls: ['autocomplete-simple-example.css'],
    })
    export class AutocompleteSimpleExample {
      myControl = new FormControl();
      options: string[] = ['One', 'Two', 'Three'];
    }
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
