import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomAlertComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <p>
  <ngb-alert type="custom" [dismissible]="false"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>
</p>
    `;

    this.tsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'ngbd-alert-custom',
      templateUrl: './alert-custom.html',
    })
    export class NgbdAlertCustom {}
    `;

    this.cssCode = `
    .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
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
