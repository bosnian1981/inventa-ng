import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tooltip-with-custom-position',
  templateUrl: './tooltip-with-custom-position.component.html',
  styleUrls: ['./tooltip-with-custom-position.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipWithCustomPositionComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field class="example-user-input">
      <mat-select placeholder="Tooltip position" [formControl]="position">
        <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
          {{positionOption}}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <button mat-raised-button
            matTooltip="Info about the action"
            [matTooltipPosition]="position.value"
            aria-label="Button that displays a tooltip in various positions">
      Action
    </button>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';
    import {TooltipPosition} from '@angular/material';

    /**
     * @title Tooltip with a custom position
     */
    @Component({
      selector: 'tooltip-position-example',
      templateUrl: 'tooltip-position-example.html',
      styleUrls: ['tooltip-position-example.css'],
    })
    export class TooltipPositionExample {
      positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
      position = new FormControl(this.positionOptions[0]);
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
