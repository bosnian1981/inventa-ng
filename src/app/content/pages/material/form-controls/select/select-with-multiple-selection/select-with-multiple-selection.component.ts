import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-with-multiple-selection',
  templateUrl: './select-with-multiple-selection.component.html',
  styleUrls: ['./select-with-multiple-selection.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWithMultipleSelectionComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
        <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
      </mat-select>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /** @title Select with multiple selection */
    @Component({
      selector: 'select-multiple-example',
      templateUrl: 'select-multiple-example.html',
      styleUrls: ['select-multiple-example.css'],
    })
    export class SelectMultipleExample {
      toppings = new FormControl();
      toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
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
