import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-angular-installation',
  templateUrl: './angular-installation.component.html',
  styleUrls: ['./angular-installation.component.scss']
})
export class AngularInstallationComponent implements OnInit {
npmCode = 'npm install -g @angular/cli';
newApp = 'ng new my-app';
serveApp = `cd my-app \nng serve --open`;

  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  copy(code: string) {
    this.clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
