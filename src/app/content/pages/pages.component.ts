import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Renderer2
} from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { Settings } from 'layout/_settings/settings.model';
import { SettingsService } from 'layout/_settings/settings.service';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import PerfectScrollbar from 'perfect-scrollbar';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PagesComponent implements OnInit, AfterViewInit {
  settings: Settings;
  loading = false;
  showScrollUpBtn = false;
  isBigScreen: boolean;
  layout = 'default';

  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarDirective)
  directiveRef?: PerfectScrollbarDirective;

  constructor(
    private settingService: SettingsService,
    private router: Router,
    public breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {
    this.settings = this.settingService.options;

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          this.closeNavigation();

          setTimeout(() => {
            const resizeEvent = window.document.createEvent('UIEvents');
            resizeEvent.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(resizeEvent);
          }, 500);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          const container = document.querySelector('#mainContainer');
          container.scrollTop = 0;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    const ps = new PerfectScrollbar('#mainContainer');

    this.breakpointObserver
      .observe(['(max-width: 1199px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isBigScreen = false;
        } else {
          this.isBigScreen = true;
        }
      });
  }

  layoutEventHander($event: any) {
    this.layout = $event;
  }

  scrollTop() {
    this.directiveRef.scrollToTop(0, 500);
  }

  public onScroll() {
    const y = this.directiveRef.position(true).y;
    if (y >= 900) {
      this.showScrollUpBtn = true;
    } else {
      this.showScrollUpBtn = false;
    }
  }

  closeNavigation() {
    if (!this.isBigScreen) {
      this.hideNavbar();
    }
  }

  hideNavbar() {
    const body = document.body;
    if (!this.isBigScreen) {
      if (body.classList.contains('navbar-above')) {
        this.renderer.removeClass(body, 'navbar-above');
        this.renderer.addClass(body, 'navbar-width-hide');
      }
    }
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}
