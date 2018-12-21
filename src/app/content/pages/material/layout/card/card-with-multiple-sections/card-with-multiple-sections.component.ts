import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-with-multiple-sections',
  templateUrl: './card-with-multiple-sections.component.html',
  styleUrls: ['./card-with-multiple-sections.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardWithMultipleSectionsComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Card with multiple sections
     */
    @Component({
      selector: 'card-fancy-example',
      templateUrl: 'card-fancy-example.html',
      styleUrls: ['card-fancy-example.css'],
    })
    export class CardFancyExample {}

    `;

    this.cssCode = `
    .example-card {
      max-width: 400px;
    }
    .example-header-image {
      background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');
      background-size: cover;
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
