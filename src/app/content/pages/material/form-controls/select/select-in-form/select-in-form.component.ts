import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-in-form',
  templateUrl: './select-in-form.component.html',
  styleUrls: ['./select-in-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectInFormComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  selectedValue: string;

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
    <form>
      <mat-form-field>
        <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">
          <mat-option *ngFor="let food of foods" [value]="food.value">
            {{food.viewValue}}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <p> Selected value: {{selectedValue}} </p>
    </form>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface Food {
      value: string;
      viewValue: string;
    }

    /**
     * @title Select in a form
     */
    @Component({
      selector: 'select-form-example',
      templateUrl: 'select-form-example.html',
      styleUrls: ['select-form-example.css'],
    })
    export class SelectFormExample {
      selectedValue: string;

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
