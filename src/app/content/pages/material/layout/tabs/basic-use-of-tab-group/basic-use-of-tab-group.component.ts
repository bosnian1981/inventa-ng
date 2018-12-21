import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-use-of-tab-group',
  templateUrl: './basic-use-of-tab-group.component.html',
  styleUrls: ['./basic-use-of-tab-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicUseOfTabGroupComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-tab-group>
      <mat-tab label="First"> Content 1 </mat-tab>
      <mat-tab label="Second"> Content 2 </mat-tab>
      <mat-tab label="Third"> Content 3 </mat-tab>
    </mat-tab-group>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic use of the tab group
     */
    @Component({
      selector: 'tab-group-basic-example',
      templateUrl: 'tab-group-basic-example.html',
      styleUrls: ['tab-group-basic-example.css'],
    })
    export class TabGroupBasicExample {}

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
