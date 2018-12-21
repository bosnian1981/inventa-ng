import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];

@Component({
  selector: 'app-closable-alert',
  templateUrl: './closable-alert.component.html',
  styleUrls: ['./closable-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClosableAlertComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  alerts: Alert[];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {
    this.reset();
  }

  ngOnInit() {
    this.htmlCode = `
    <p *ngFor="let alert of alerts">
      <ngb-alert [type]="alert.type" (close)="close(alert)">{{
        alert.message
      }}</ngb-alert>
    </p>
    <p>
      <button type="button" class="btn btn-primary" (click)="reset()">
        Reset
      </button>
    </p>
    `;

    this.tsCode = `
    import { Input, Component } from '@angular/core';

    interface Alert {
      type: string;
      message: string;
    }

    const ALERTS: Alert[] = [{
        type: 'success',
        message: 'This is an success alert',
      }, {
        type: 'info',
        message: 'This is an info alert',
      }, {
        type: 'warning',
        message: 'This is a warning alert',
      }, {
        type: 'danger',
        message: 'This is a danger alert',
      }, {
        type: 'primary',
        message: 'This is a primary alert',
      }, {
        type: 'secondary',
        message: 'This is a secondary alert',
      }, {
        type: 'light',
        message: 'This is a light alert',
      }, {
        type: 'dark',
        message: 'This is a dark alert',
      }
    ];

    @Component({
      selector: 'ngbd-alert-closeable',
      templateUrl: './alert-closeable.html'
    })
    export class NgbdAlertCloseable {

      alerts: Alert[];

      constructor() {
        this.reset();
      }

      close(alert: Alert) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
      }

      reset() {
        this.alerts = Array.from(ALERTS);
      }
    }
    `;

    this.cssCode = `
    ...
    `;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
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
