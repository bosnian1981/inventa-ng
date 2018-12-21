import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-basic-use-of-tab-navbar',
  templateUrl: './basic-use-of-tab-navbar.component.html',
  styleUrls: ['./basic-use-of-tab-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicUseOfTabNavbarComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <button mat-raised-button
            class="example-action-button"
            (click)="toggleBackground()">
      Toggle background
    </button>

    <nav mat-tab-nav-bar [backgroundColor]="background">
      <a mat-tab-link *ngFor="let link of links"
        (click)="activeLink = link"
        [active]="activeLink == link"> {{link}} </a>
      <a mat-tab-link disabled>Disabled Link</a>
    </nav>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Basic use of the tab nav bar
     */
    @Component({
      selector: 'tab-nav-bar-basic-example',
      templateUrl: 'tab-nav-bar-basic-example.html',
      styleUrls: ['tab-nav-bar-basic-example.css'],
    })
    export class TabNavBarBasicExample {
      links = ['First', 'Second', 'Third'];
      activeLink = this.links[0];
      background = '';

      toggleBackground() {
        this.background = this.background ? '' : 'primary';
      }
    }
    `;

    this.cssCode = `
    .example-action-button {
      margin-bottom: 8px;
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
