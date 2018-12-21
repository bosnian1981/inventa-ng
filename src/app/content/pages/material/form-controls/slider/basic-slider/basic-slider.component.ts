import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-slider',
  templateUrl: './basic-slider.component.html',
  styleUrls: ['./basic-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicSliderComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-slider></mat-slider>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic slider
     */
    @Component({
      selector: 'slider-overview-example',
      templateUrl: 'slider-overview-example.html',
      styleUrls: ['slider-overview-example.css'],
    })
    export class SliderOverviewExample {}

    `;

    this.cssCode = `
    /** No CSS for this example */
    mat-slider {
      width: 300px;
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
