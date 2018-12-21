import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-basic-snackbar',
  templateUrl: './basic-snackbar.component.html',
  styleUrls: ['./basic-snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicSnackbarComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    public snackBar: MatSnackBar
    ) {}

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <input matInput value="Disco party!" placeholder="Message" #message>
    </mat-form-field>

    <mat-form-field>
      <input matInput value="Dance" placeholder="Action" #action>
    </mat-form-field>

    <button mat-button (click)="openSnackBar(message.value, action.value)">Show snack-bar</button>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {MatSnackBar} from '@angular/material';

    /**
     * @title Basic snack-bar
     */
    @Component({
      selector: 'snack-bar-overview-example',
      templateUrl: 'snack-bar-overview-example.html',
      styleUrls: ['snack-bar-overview-example.css'],
    })
    export class SnackBarOverviewExample {
      constructor(public snackBar: MatSnackBar) {}

      openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
          duration: 2000,
        });
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
