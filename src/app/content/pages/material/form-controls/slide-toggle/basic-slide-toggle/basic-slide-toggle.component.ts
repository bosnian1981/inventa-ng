import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-slide-toggle',
  templateUrl: './basic-slide-toggle.component.html',
  styleUrls: ['./basic-slide-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicSlideToggleComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-slide-toggle>Slide me!</mat-slide-toggle>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic slide-toggles
     */
    @Component({
      selector: 'slide-toggle-overview-example',
      templateUrl: 'slide-toggle-overview-example.html',
      styleUrls: ['slide-toggle-overview-example.css'],
    })
    export class SlideToggleOverviewExample {}

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
