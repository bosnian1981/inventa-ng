import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar-with-custom-component',
  templateUrl: './snackbar-with-custom-component.component.html',
  styleUrls: ['./snackbar-with-custom-component.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarWithCustomComponentComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    public snackBar: MatSnackBar
    ) {}

    openSnackBar() {
      this.snackBar.openFromComponent(PizzaPartyComponent, {
        duration: 500,
      });
    }

  ngOnInit() {
    this.htmlCode = `
    <button mat-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
      Pizza party
    </button>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {MatSnackBar} from '@angular/material';

    /**
     * @title Snack-bar with a custom component
     */
    @Component({
      selector: 'snack-bar-component-example',
      templateUrl: 'snack-bar-component-example.html',
    })
    export class SnackBarComponentExample {
      constructor(public snackBar: MatSnackBar) {}

      openSnackBar() {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
          duration: 500,
        });
      }
    }


    @Component({
      selector: 'snack-bar-component-example-snack',
      templateUrl: 'snack-bar-component-example-snack.html',
      styles: [],
    })
    export class PizzaPartyComponent {}
    `;

    this.cssCode = `
    .example-pizza-party {
      color: hotpink;
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

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
