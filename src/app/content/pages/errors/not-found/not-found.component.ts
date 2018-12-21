import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewEncapsulation, Renderer2 } from '@angular/core';
import { Settings } from 'layout/_settings/settings.model';
import { SettingsService } from 'layout/_settings/settings.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SettingsService]
})
export class NotFoundComponent implements AfterViewInit {
  settings: Settings;
  loading = false;

  constructor(
    private settingService: SettingsService,
    private renderer: Renderer2
  ) {
    this.settings = this.settingService.options;
    this.setDefaultClasses();
  }

  setDefaultClasses() {
    this.renderer.addClass(document.body, 'mat-app-background');
    this.renderer.addClass(
      document.body,
      `layout-${this.settings.theme.layout}`
    );
    this.renderer.addClass(document.body, `skin-${this.settings.theme.skin}`);
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}
