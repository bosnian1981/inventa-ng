import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-theme-create-new-page',
  templateUrl: './theme-create-new-page.component.html',
  styleUrls: ['./theme-create-new-page.component.scss']
})
export class ThemeCreateNewPageComponent implements OnInit {
  code = `
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { NewPageComponent } from './new-page.component';
  import { RouterModule } from '@angular/router';

  export const routes = [
    { path: '', component: NewPageComponent, pathMatch: 'full' }
  ];

  @NgModule({
    declarations: [NewPageComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
  })
  export class NewPageModule { }
  `;

  routeCode = `
  {
    path: 'new-page',
    loadChildren: './new-page/new-page.module#NewPageModule',
    data: { breadcrumb: 'New Page' }
  }`;

  navigationRoot = `
  export const NavData = [
    // Root
    new NavModel(1, 'Dashboard', '/dashboard', null, 'area-chart', 'fa', null, false, 0),
    new NavModel(2, 'New Page', '/new-page', null, 'icon-name', 'fa', null, false, 0),
    .
    .
    .
  ]
  `;

  sublink = `
  export const NavData = [
    // Root
    new NavModel(1, 'Dashboard', '/dashboard', null, 'area-chart', 'fa', null, true, 0),
    new NavModel(2, 'New Page', '/new-page', null, 'icon-name', 'fa', null, false, 1),
    .
    .
    .
  ]
  `;

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
