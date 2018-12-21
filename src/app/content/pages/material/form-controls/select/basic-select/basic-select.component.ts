import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-basic-select',
  templateUrl: './basic-select.component.html',
  styleUrls: ['./basic-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicSelectComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Favorite food">
        <mat-option *ngFor="let food of foods" [value]="food.value">
          {{food.viewValue}}
        </mat-option>
      </mat-select>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface Food {
      value: string;
      viewValue: string;
    }

    /**
     * @title Basic select
     */
    @Component({
      selector: 'select-overview-example',
      templateUrl: 'select-overview-example.html',
      styleUrls: ['select-overview-example.css'],
    })
    export class SelectOverviewExample {
      foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];
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
