import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drag-drop-basic',
  templateUrl: './drag-drop-basic.component.html',
  styleUrls: ['./drag-drop-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropBasicComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <div class="example-box" cdkDrag>
      Drag me around
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic Drag&Drop
     */
    @Component({
      selector: 'cdk-drag-drop-overview-example',
      templateUrl: 'cdk-drag-drop-overview-example.html',
      styleUrls: ['cdk-drag-drop-overview-example.css'],
    })
    export class CdkDragDropOverviewExample {}
    `;

    this.cssCode = `
    .example-box {
      width: 200px;
      height: 200px;
      border: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      cursor: move;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #fff;
      border-radius: 4px;
      position: relative;
      z-index: 1;
      transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
      box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                  0 2px 2px 0 rgba(0, 0, 0, 0.14),
                  0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }

    .example-box:active {
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
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
