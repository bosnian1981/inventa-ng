import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-radios-with-ngmodel',
  templateUrl: './radios-with-ngmodel.component.html',
  styleUrls: ['./radios-with-ngmodel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadiosWithNgmodelComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-radio-group class="example-radio-group" [(ngModel)]="favoriteSeason">
      <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
        {{season}}
      </mat-radio-button>
    </mat-radio-group>
    <div class="example-selected-value">Your favorite season is: {{favoriteSeason}}</div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Radios with ngModel
     */
    @Component({
      selector: 'radio-ng-model-example',
      templateUrl: 'radio-ng-model-example.html',
      styleUrls: ['radio-ng-model-example.css'],
    })
    export class RadioNgModelExample {
      favoriteSeason: string;
      seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }

    })
    export class ChipsOverviewExample {}
    `;

    this.cssCode = `
    .example-radio-group {
      display: inline-flex;
      flex-direction: column;
    }
    .example-radio-button {
      margin: 5px;
    }
    .example-selected-value {
      margin: 15px 0;
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
