import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-group-with-dynamically-changing-tabs',
  templateUrl: './tab-group-with-dynamically-changing-tabs.component.html',
  styleUrls: ['./tab-group-with-dynamically-changing-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithDynamicallyChangingTabsComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <div>
      <span class="example-input-label"> Selected tab index: </span>
      <mat-form-field>
        <input matInput type="number" [formControl]="selected">
      </mat-form-field>
    </div>

    <div>
      <button mat-raised-button
              class="example-add-tab-button"
              (click)="addTab(selectAfterAdding.checked)">
        Add new tab
      </button>
      <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>
    </div>

    <mat-tab-group [selectedIndex]="selected.value"
                  (selectedIndexChange)="selected.setValue($event)">
      <mat-tab *ngFor="let tab of tabs; let index = index" [label]="tab">
        Contents for {{tab}} tab

        <button mat-raised-button
                class="example-delete-tab-button"
                [disabled]="tabs.length === 1"
                (click)="removeTab(index)">
          Delete Tab
        </button>
      </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    /**
     * @title Tab group with dynamically changing tabs
     */
    @Component({
      selector: 'tab-group-dynamic-example',
      templateUrl: 'tab-group-dynamic-example.html',
      styleUrls: ['tab-group-dynamic-example.css'],
    })
    export class TabGroupDynamicExample {
      tabs = ['First', 'Second', 'Third'];
      selected = new FormControl(0);

      addTab(selectAfterAdding: boolean) {
        this.tabs.push('New');

        if (selectAfterAdding) {
          this.selected.setValue(this.tabs.length - 1);
        }
      }

      removeTab(index: number) {
        this.tabs.splice(index, 1);
      }
    }

    `;

    this.cssCode = `
    .example-input-label,
    .example-add-tab-button,
    .example-delete-tab-button {
      margin: 8px;
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
