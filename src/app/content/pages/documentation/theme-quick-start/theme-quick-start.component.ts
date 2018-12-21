import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-theme-quick-start',
  templateUrl: './theme-quick-start.component.html',
  styleUrls: ['./theme-quick-start.component.scss']
})
export class ThemeQuickStartComponent implements OnInit {
  cliInstall = 'npm install -g @angular/cli';
  npmInstall = 'npm install';
  servingApp = 'ng serve --open';

  constructor(
    private clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  copy(code: string) {
    this.clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
