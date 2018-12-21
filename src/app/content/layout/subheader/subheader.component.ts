import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  UrlSegment
} from '@angular/router';
import { Settings } from 'layout/_settings/settings.model';
import { SettingsService } from 'layout/_settings/settings.service';

interface IBreadcrumb {
  name: string;
  url: string;
}

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SubheaderComponent {
  public pageTitle: string;
  public breadcrumbs: IBreadcrumb[] = [];
  public settings: Settings;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public title: Title,
    public settingsService: SettingsService
  ) {
    this.settings = this.settingsService.options;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.parseRoute(this.router.routerState.snapshot.root);
        this.pageTitle = '';
        this.breadcrumbs.forEach(breadcrumb => {
          this.pageTitle += ' > ' + breadcrumb.name;
        });
        this.title.setTitle(this.settings.title + this.pageTitle);
      }
    });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb']) {
      if (node.url.length) {
        let urlSegments: UrlSegment[] = [];
        node.pathFromRoot.forEach(routerState => {
          urlSegments = urlSegments.concat(routerState.url);
        });
        const url = urlSegments
          .map(urlSegment => {
            return urlSegment.path;
          })
          .join('/');
        this.breadcrumbs.push({
          name: node.data['breadcrumb'],
          url: '/' + url
        });
      }
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

  public closeSubMenus() {
    const menu = document.querySelector('#menu0');
    if (menu) {
      for (let i = 0; i < menu.children.length; i++) {
        const child = menu.children[i].children[1];
        if (child) {
          if (child.classList.contains('show')) {
            child.classList.remove('show');
            menu.children[i].children[0].classList.add('collapsed');
          }
        }
      }
    }
  }
}
