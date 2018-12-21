import { Component, OnInit, ViewEncapsulation, NgZone, ViewChild } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-autoresizing-textarea',
  templateUrl: './autoresizing-textarea.component.html',
  styleUrls: ['./autoresizing-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutoresizingTextareaComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private ngZone: NgZone
    ) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-label>Font size</mat-label>
      <mat-select #fontSize value="16px" (selectionChange)="triggerResize()">
        <mat-option value="10px">10px</mat-option>
        <mat-option value="12px">12px</mat-option>
        <mat-option value="14px">14px</mat-option>
        <mat-option value="16px">16px</mat-option>
        <mat-option value="18px">18px</mat-option>
        <mat-option value="20px">20px</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field [style.fontSize]="fontSize.value">
      <mat-label>Autosize textarea</mat-label>
      <textarea matInput
                cdkTextareaAutosize
                #autosize="cdkTextareaAutosize"
                cdkAutosizeMinRows="2"
                cdkAutosizeMaxRows="5"></textarea>
    </mat-form-field>
    `;

    this.tsCode = `
    import {CdkTextareaAutosize} from '@angular/cdk/text-field';
    import {Component, NgZone, ViewChild} from '@angular/core';
    import {take} from 'rxjs/operators';

    /** @title Auto-resizing textarea */
    @Component({
      selector: 'text-field-autosize-textarea-example',
      templateUrl: './text-field-autosize-textarea-example.html',
      styleUrls: ['./text-field-autosize-textarea-example.css'],
    })
    export class TextFieldAutosizeTextareaExample {
      constructor(private ngZone: NgZone) {}

      @ViewChild('autosize') autosize: CdkTextareaAutosize;

      triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
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
