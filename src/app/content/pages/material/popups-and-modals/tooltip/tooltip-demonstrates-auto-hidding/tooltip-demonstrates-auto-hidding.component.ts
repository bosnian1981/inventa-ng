import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-tooltip-demonstrates-auto-hidding',
  templateUrl: './tooltip-demonstrates-auto-hidding.component.html',
  styleUrls: ['./tooltip-demonstrates-auto-hidding.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipDemonstratesAutoHiddingComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Tooltip position" [formControl]="position">
        <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
          {{positionOption}}
        </mat-option>
      </mat-select>
    </mat-form-field>

    <div class="example-container" cdk-scrollable>
      <button mat-raised-button #tooltip="matTooltip"
              matTooltip="Info about the action"
              [matTooltipPosition]="position.value"
              matTooltipHideDelay="100000"
              aria-label="Button that displays a tooltip that hides when scrolled out of the container"
              class="example-button">
        Action
      </button>
    </div>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';
    import {TooltipPosition} from '@angular/material';

    /**
     * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
     */
    @Component({
      selector: 'tooltip-auto-hide-example',
      templateUrl: 'tooltip-auto-hide-example.html',
      styleUrls: ['tooltip-auto-hide-example.css'],
    })
    export class TooltipAutoHideExample {
      positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
      position = new FormControl(this.positionOptions[0]);
    }

    `;

    this.cssCode = `
    .example-button {
      display: block;
      width: 48px;
      margin: 80px auto 400px;
    }
    .example-container {
      height: 200px;
      overflow: auto;
      border: 1px solid #ccc;
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
