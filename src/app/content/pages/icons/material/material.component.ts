import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';
import { MaterialIconsService } from '../icons-core/services/material-icons.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MaterialComponent implements OnInit {
  iconTypes = [];
  icons = [];
  public searchText: string;

  constructor(
    private matIconsService: MaterialIconsService,
    private clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getIconTypes();
  }

  getIconTypes() {
    this.iconTypes = this.matIconsService.getIconTypes();
  }

  public getIcons(type) {
    if (!this.searchText) {
      this.icons = this.matIconsService.getIconList(type);
    } else {
      this.icons = this.matIconsService.getIconListBySearchText(
        type,
        this.searchText.toLowerCase()
      );
    }
    return this.icons;
  }

  copyToClipboard(icon) {
    this.clipboardService.copyFromContent(`<mat-button>${icon}</mat-button>`);
    this.toastr.success('Code copied!');
  }
}
