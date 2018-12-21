import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularDeploymentComponent } from './angular-deployment/angular-deployment.component';
import { AngularInstallationComponent } from './angular-installation/angular-installation.component';
import { AngularOverviewComponent } from './angular-overview/angular-overview.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ReferencesComponent } from './references/references.component';
import { ThemeCreateCustomSkinComponent } from './theme-create-custom-skin/theme-create-custom-skin.component';
import { ThemeCreateNewPageComponent } from './theme-create-new-page/theme-create-new-page.component';
import { ThemeFilesStructureComponent } from './theme-files-structure/theme-files-structure.component';
import { ThemeQuickStartComponent } from './theme-quick-start/theme-quick-start.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component';
import { ThemeStylesheetsComponent } from './theme-stylesheets/theme-stylesheets.component';

export const routes = [
  { path: '', redirectTo: 'angular-overview', pathMatch: 'full' },
  {
    path: 'angular-overview',
    component: AngularOverviewComponent,
    data: { breadcrumb: 'Angular Overview' }
  },
  {
    path: 'angular-instalation',
    component: AngularInstallationComponent,
    data: { breadcrumb: 'Angular Installation' }
  },
  {
    path: 'angular-deployment',
    component: AngularDeploymentComponent,
    data: { breadcrumb: 'Angular Deployment' }
  },
  {
    path: 'theme-quick-start',
    component: ThemeQuickStartComponent,
    data: { breadcrumb: 'Theme - Quick Start' }
  },
  {
    path: 'theme-create-new-page',
    component: ThemeCreateNewPageComponent,
    data: { breadcrumb: 'Theme - Create New Page' }
  },
  {
    path: 'theme-create-custom-skin',
    component: ThemeCreateCustomSkinComponent,
    data: { breadcrumb: 'Theme - Create Custom Skin' }
  },
  {
    path: 'theme-files-structure',
    component: ThemeFilesStructureComponent,
    data: { breadcrumb: 'Theme Files Structure' }
  },
  {
    path: 'theme-stylesheets',
    component: ThemeStylesheetsComponent,
    data: { breadcrumb: 'Theme Stylesheets' }
  },
  {
    path: 'theme-settings',
    component: ThemeSettingsComponent,
    data: { breadcrumb: 'Theme Settings' }
  },
  {
    path: 'references',
    component: ReferencesComponent,
    data: { breadcrumb: 'References' }
  },
  {
    path: 'changelog',
    component: ChangelogComponent,
    data: { breadcrumb: 'Changelog' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
