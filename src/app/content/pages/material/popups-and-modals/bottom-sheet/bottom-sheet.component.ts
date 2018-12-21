import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomSheetComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private bottomSheet: MatBottomSheet
    ) {}

    openBottomSheet(): void {
      this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    }

  ngOnInit() {
    this.htmlCode = `
    <p>You have receive a file called "cat-picture.jpeg".</p>

    <button mat-raised-button (click)="openBottomSheet()">Open file</button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

    /**
     * @title Bottom Sheet Overview
     */
    @Component({
      selector: 'bottom-sheet-overview-example',
      templateUrl: 'bottom-sheet-overview-example.html',
      styleUrls: ['bottom-sheet-overview-example.css'],
    })
    export class BottomSheetOverviewExample {
      constructor(private bottomSheet: MatBottomSheet) {}

      openBottomSheet(): void {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
      }
    }

    @Component({
      selector: 'bottom-sheet-overview-example-sheet',
      templateUrl: 'bottom-sheet-overview-example-sheet.html',
    })
    export class BottomSheetOverviewExampleSheet {
      constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

      openLink(event: MouseEvent): void {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
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

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
// tslint:disable-next-line:component-class-suffix
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
