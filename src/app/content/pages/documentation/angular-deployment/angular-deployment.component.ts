import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-angular-deployment',
  templateUrl: './angular-deployment.component.html',
  styleUrls: ['./angular-deployment.component.scss']
})
export class AngularDeploymentComponent implements OnInit {
jitCode = `ng build \nng serve`;
aotCode = `ng build --aot \nng serve --aot`;
simplestDeployment = 'ng build --prod';
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
