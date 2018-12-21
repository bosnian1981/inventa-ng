import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { HighlightModule } from 'ngx-highlightjs';
import { AngularDeploymentComponent } from './angular-deployment/angular-deployment.component';
import { AngularInstallationComponent } from './angular-installation/angular-installation.component';
import { AngularOverviewComponent } from './angular-overview/angular-overview.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { DocsRoutingModule } from './documentation.routing';
import { ReferencesComponent } from './references/references.component';
import { ThemeCreateCustomSkinComponent } from './theme-create-custom-skin/theme-create-custom-skin.component';
import { ThemeCreateNewPageComponent } from './theme-create-new-page/theme-create-new-page.component';
import { ThemeFilesStructureComponent } from './theme-files-structure/theme-files-structure.component';
import { ThemeQuickStartComponent } from './theme-quick-start/theme-quick-start.component';
import { ThemeSettingsComponent } from './theme-settings/theme-settings.component';
import { ThemeStylesheetsComponent } from './theme-stylesheets/theme-stylesheets.component';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HighlightModule.forRoot({ theme: 'arduino-light' })
  ],
  declarations: [
    AngularOverviewComponent,
    AngularInstallationComponent,
    AngularDeploymentComponent,
    ThemeFilesStructureComponent,
    ThemeQuickStartComponent,
    ThemeStylesheetsComponent,
    ThemeSettingsComponent,
    ThemeCreateNewPageComponent,
    ThemeCreateCustomSkinComponent,
    ReferencesComponent,
    ChangelogComponent
  ]
})
export class DocumentationModule {}
