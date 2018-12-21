import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-with-custom-trigger-text',
  templateUrl: './select-with-custom-trigger-text.component.html',
  styleUrls: ['./select-with-custom-trigger-text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWithCustomTriggerTextComponent implements OnInit {
  
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
        <mat-select-trigger>
          {{toppings.value ? toppings.value[0] : ''}}
          <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">
            (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})
          </span>
        </mat-select-trigger>
        <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
      </mat-select>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /** @title Select with custom trigger text */
    @Component({
      selector: 'select-custom-trigger-example',
      templateUrl: 'select-custom-trigger-example.html',
      styleUrls: ['select-custom-trigger-example.css'],
    })
    export class SelectCustomTriggerExample {
      toppings = new FormControl();

      toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    `;

    this.cssCode = `
    .example-additional-selection {
      opacity: 0.75;
      font-size: 0.75em;
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
