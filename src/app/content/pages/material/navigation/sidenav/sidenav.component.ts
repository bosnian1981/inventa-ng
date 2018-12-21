import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  showFiller = false;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer #drawer class="example-sidenav" mode="side">
        <p>Auto-resizing sidenav</p>
        <p *ngIf="showFiller">Lorem, ipsum dolor sit amet consectetur.</p>
        <button (click)="showFiller = !showFiller" mat-raised-button>
          Toggle extra text
        </button>
      </mat-drawer>

      <div class="example-sidenav-content">
        <button type="button" mat-button (click)="drawer.toggle()">
          Toggle sidenav
        </button>
      </div>
    </mat-drawer-container>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Autosize sidenav
     */
    @Component({
      selector: 'sidenav-autosize-example',
      templateUrl: 'sidenav-autosize-example.html',
      styleUrls: ['sidenav-autosize-example.css'],
    })
    export class SidenavAutosizeExample {
      showFiller = false;
    }
    `;

    this.cssCode = `
    .example-container {
      width: 500px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
    .example-sidenav-content {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    .example-sidenav {
      padding: 20px;
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
