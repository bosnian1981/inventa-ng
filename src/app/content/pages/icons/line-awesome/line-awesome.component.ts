import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LineAwesomeIconsService } from '../icons-core/services/line-awesome-icons.service';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-line-awesome',
  templateUrl: './line-awesome.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LineAwesomeComponent implements OnInit {
  icons = [];
  public searchText: string;

  constructor(
    private laIconsService: LineAwesomeIconsService,
    private clipboardService: ClipboardService,
    private toastr: ToastrService
  ) { }
  ngOnInit() {}

  public getIcons() {
    if (!this.searchText) {
      this.icons = this.laIconsService.getIconList();
    } else {
      this.icons = this.laIconsService.getIconListBySearchText(this.searchText.toLowerCase());
    }
    return this.icons;
  }

  copyToClipboard(icon) {
    this.clipboardService.copyFromContent(`<i class="${icon}"></i>`);
    this.toastr.success('Code copied!');
  }
}
