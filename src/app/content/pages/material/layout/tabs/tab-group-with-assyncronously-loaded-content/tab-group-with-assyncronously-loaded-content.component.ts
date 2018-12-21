import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tab-group-with-assyncronously-loaded-content',
  templateUrl: './tab-group-with-assyncronously-loaded-content.component.html',
  styleUrls: ['./tab-group-with-assyncronously-loaded-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabGroupWithAssyncronouslyLoadedContentComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  asyncTabs: Observable<ExampleTab[]>;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {
      this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
        setTimeout(() => {
          observer.next([
            {label: 'First', content: 'Content 1'},
            {label: 'Second', content: 'Content 2'},
            {label: 'Third', content: 'Content 3'},
          ]);
        }, 1000);
      });
    }

  ngOnInit() {
    this.htmlCode = `
    import {Component} from '@angular/core';
    import {Observable, Observer} from 'rxjs';

    export interface ExampleTab {
      label: string;
      content: string;
    }

    /**
     * @title Tab group with asynchronously loading tab contents
     */
    @Component({
      selector: 'tab-group-async-example',
      templateUrl: 'tab-group-async-example.html',
      styleUrls: ['tab-group-async-example.css'],
    })
    export class TabGroupAsyncExample {
      asyncTabs: Observable<ExampleTab[]>;

      constructor() {
        this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
          setTimeout(() => {
            observer.next([
              {label: 'First', content: 'Content 1'},
              {label: 'Second', content: 'Content 2'},
              {label: 'Third', content: 'Content 3'},
            ]);
          }, 1000);
        });
      }
    }

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic chips
     */
    @Component({
      selector: 'chips-overview-example',
      templateUrl: 'chips-overview-example.html',
      styleUrls: ['chips-overview-example.css'],
    })
    export class ChipsOverviewExample {}
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
