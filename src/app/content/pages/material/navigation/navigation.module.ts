import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'shared/shared.module';
import { MenuComponent } from 'pages/material/navigation/menu/menu.component';
import { BasicMenuComponent } from 'pages/material/navigation/menu/basic-menu/basic-menu.component';
import { MenuWithIconsComponent } from 'pages/material/navigation/menu/menu-with-icons/menu-with-icons.component';
import { NestedMenuComponent } from 'pages/material/navigation/menu/nested-menu/nested-menu.component';
import { SidenavComponent } from 'pages/material/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from 'pages/material/navigation/toolbar/toolbar.component';
import { BasicToolbarComponent } from 'pages/material/navigation/toolbar/basic-toolbar/basic-toolbar.component';
import { MultiRowToolbarComponent } from 'pages/material/navigation/toolbar/multi-row-toolbar/multi-row-toolbar.component';
import { MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SharedMaterialModule } from 'pages/material/shared-material.module';

@NgModule({
imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
],
declarations: [
     // menu
     MenuComponent,
     BasicMenuComponent,
     MenuWithIconsComponent,
     NestedMenuComponent,
     // end - menu

     // sidenav
     SidenavComponent,
     // end - sidenav

     // toolbar
     ToolbarComponent,
     BasicToolbarComponent,
     MultiRowToolbarComponent,
     // end - toolbar
],
exports: [
     // menu
     MenuComponent,
     BasicMenuComponent,
     MenuWithIconsComponent,
     NestedMenuComponent,
     // end - menu

     // sidenav
     SidenavComponent,
     // end - sidenav

     // toolbar
     ToolbarComponent,
     BasicToolbarComponent,
     MultiRowToolbarComponent,
     // end - toolbar
]
})
export class NavigationModule {}
