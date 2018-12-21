import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  animal: string;
  name: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    public dialog: MatDialog
    ) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '250px',
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

  ngOnInit() {
    this.htmlCode = `
    <ol>
      <li>
        <mat-form-field>
          <input matInput [(ngModel)]="name" placeholder="What's your name?">
        </mat-form-field>
      </li>
      <li>
        <button mat-raised-button (click)="openDialog()">Pick one</button>
      </li>
      <li *ngIf="animal">
        You chose: <i>{{animal}}</i>
      </li>
    </ol>

    `;

    this.tsCode = `
    import {Component, Inject} from '@angular/core';
    import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

    export interface DialogData {
      animal: string;
      name: string;
    }

    /**
     * @title Dialog Overview
     */
    @Component({
      selector: 'dialog-overview-example',
      templateUrl: 'dialog-overview-example.html',
      styleUrls: ['dialog-overview-example.css'],
    })
    export class DialogOverviewExample {

      animal: string;
      name: string;

      constructor(public dialog: MatDialog) {}

      openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '250px',
          data: {name: this.name, animal: this.animal}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.animal = result;
        });
      }

    }

    @Component({
      selector: 'dialog-overview-example-dialog',
      templateUrl: 'dialog-overview-example-dialog.html',
    })
    export class DialogOverviewExampleDialog {

      constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

      onNoClick(): void {
        this.dialogRef.close();
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
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
