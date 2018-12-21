import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-self-closing-alert',
  templateUrl: './self-closing-alert.component.html',
  styleUrls: ['./self-closing-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelfClosingAlertComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    setTimeout(() => (this.staticAlertClosed = true), 20000);

    this._success.subscribe(message => (this.successMessage = message));
    this._success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = null));

    this.htmlCode = `
    <p>
      Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)
    </p>
    <ngb-alert *ngIf="!staticAlertClosed" (close)="staticAlertClosed = true">Check out our awesome new features!</ngb-alert>

    <hr/>

    <p>
      Show a self-closing success message that disappears after 5 seconds.
    </p>
    <ngb-alert *ngIf="successMessage" type="success" (close)="successMessage = null">{{ successMessage }}</ngb-alert>
    <p>
      <button class="btn btn-primary" (click)="changeSuccessMessage()">Change message</button>
    </p>
    `;

    this.tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ngbd-alert-basic',
      templateUrl: './alert-basic.html'
    })
    export class NgbdAlertBasic {}
    `;

    this.cssCode = `
    ...
    `;
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
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
