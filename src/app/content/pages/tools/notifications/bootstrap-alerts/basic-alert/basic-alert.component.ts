import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-basic-alert',
  templateUrl: './basic-alert.component.html',
  styleUrls: ['./basic-alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicAlertComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <ngb-alert [dismissible]="false" class="m-0 w-100">
      <strong>Warning!</strong> Better check yourself, you're not looking
      too good.
    </ngb-alert>
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
