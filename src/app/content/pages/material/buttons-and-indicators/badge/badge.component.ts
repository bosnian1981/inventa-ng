import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BadgeComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <p>
      <span matBadge="4" matBadgeOverlap="false">Text with a badge</span>
    </p>

    <p>
      Button with a badge on the left
      <button mat-raised-button color="primary"
          matBadge="8" matBadgePosition="before" matBadgeColor="accent">
        Action
      </button>
    </p>

    <p>
      Icon with a badge
      <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
    </p>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Badge overview
     */
    @Component({
      selector: 'badge-overview-example',
      templateUrl: 'badge-overview-example.html',
      styleUrls: ['badge-overview-example.css'],
    })
    export class BadgeOverviewExample {}
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

    this.clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
