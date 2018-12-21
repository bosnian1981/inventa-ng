import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-config',
  templateUrl: './alert-config.component.html',
  styleUrls: ['./alert-config.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // add NgbAlertConfig  to the component providers
  providers: [NgbAlertConfig]
})
export class AlertConfigComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  @Input() public alerts: Array<string> = [];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    alertConfig: NgbAlertConfig
  ) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }

  ngOnInit() {
    this.htmlCode = `
    <p>
    <ngb-alert>
      This alert's type is success and it's not dismissible because the config has been customized
    </ngb-alert>
  </p>
    `;

    this.tsCode = `
    import {Component, Input} from '@angular/core';
    import {NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

    @Component({
      selector: 'ngbd-alert-config',
      templateUrl: './alert-config.html',
      // add NgbAlertConfig  to the component providers
      providers: [NgbAlertConfig]
    })
    export class NgbdAlertConfig {
      @Input() public alerts: Array<string> = [];

      constructor(alertConfig: NgbAlertConfig) {
        // customize default values of alerts used by this component tree
        alertConfig.type = 'success';
        alertConfig.dismissible = false;
      }
    }
    `;

    this.cssCode = `
    ...
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
