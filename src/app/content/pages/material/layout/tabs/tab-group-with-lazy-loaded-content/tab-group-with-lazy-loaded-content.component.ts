import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab-group-with-lazy-loaded-content',
  templateUrl: './tab-group-with-lazy-loaded-content.component.html',
  styleUrls: ['./tab-group-with-lazy-loaded-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithLazyLoadedContentComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group>
      <mat-tab label="First">
        <ng-template matTabContent>
          Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}
        </ng-template>
      </mat-tab>
      <mat-tab label="Second">
        <ng-template matTabContent>
          Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}
        </ng-template>
      </mat-tab>
      <mat-tab label="Third">
        <ng-template matTabContent>
          Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}
        </ng-template>
      </mat-tab>
    </mat-tab-group>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Tab group where the tab content is loaded lazily (when activated)
     */
    @Component({
      selector: 'tab-group-lazy-loaded-example',
      templateUrl: 'tab-group-lazy-loaded-example.html',
      styleUrls: ['tab-group-lazy-loaded-example.css'],
    })
    export class TabGroupLazyLoadedExample {
      tabLoadTimes: Date[] = [];

      getTimeLoaded(index: number) {
        if (!this.tabLoadTimes[index]) {
          this.tabLoadTimes[index] = new Date();
        }

        return this.tabLoadTimes[index];
      }
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
