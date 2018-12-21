import {
  Component,
  ViewEncapsulation,
  Renderer2,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { Settings } from './settings.model';
import { SettingsService } from './settings.service';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SettingsService]
})
export class SettingsComponent implements OnInit {
  public settings: Settings;
  themeClasses = [];
  showSettingsBlock = false;
  code: string;
  allowHorizontalLayout = true;
  isBigScreen = false;

  @Output()
  layoutEvent = new EventEmitter<string>();

  constructor(
    public settingsService: SettingsService,
    private renderer: Renderer2,
    private clipboardService: ClipboardService,
    private toastr: ToastrService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.settings = this.settingsService.options;
    this.setDefaultClasses();
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1199px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.removeClass(`navbar-width-${this.settings.theme.navbar.width}`);
          this.removeClass('chat-position-left');
          this.removeClass('navbar-position-right');
          this.setClass(`navbar-width-hide`);
          this.hideChat(null, true);
          this.allowHorizontalLayout = false;
          this.layoutEvent.emit('default');
          this.removeClass(`layout-${this.settings.theme.layout}`);
          this.setClass(`layout-default`);
          this.isBigScreen = false;
        } else {
          this.setDefaultClasses();
          this.layoutEvent.emit(this.settings.theme.layout);
          this.allowHorizontalLayout = true;
          this.isBigScreen = true;
        }
      });
  }

  public changeColors(colors) {
    this.removeClass(`skin-${this.settings.theme.skin}`);
    this.settings.theme.skin = colors;
    localStorage.setItem('skin', colors);
    this.setClass(`skin-${this.settings.theme.skin}`);
  }

  public changeLayout(layout) {
    if (layout === 'horizontal') {
      this.layoutEvent.emit('horizontal');
    } else {
      this.layoutEvent.emit('default');
    }
    this.removeClass(`layout-${this.settings.theme.layout}`);
    this.settings.theme.layout = layout;
    this.setClass(`layout-${this.settings.theme.layout}`);
  }

  changeHeaderState(state) {
    this.removeClass(`header-${this.settings.theme.header.state}`);
    this.settings.theme.header.state = state;
    this.setClass(`header-${this.settings.theme.header.state}`);
  }

  changeFooterState(state) {
    this.removeClass(`footer-${this.settings.theme.footer.state}`);
    this.settings.theme.footer.state = state;
    this.setClass(`footer-${this.settings.theme.footer.state}`);
  }

  changeNavbarWidth(width) {
    this.removeClass(`navbar-width-${this.settings.theme.navbar.width}`);
    this.settings.theme.navbar.width = width;
    this.setClass(`navbar-width-${this.settings.theme.navbar.width}`);
  }

  changeNavbarPosition(position) {
    this.removeClass(`navbar-position-${this.settings.theme.navbar.position}`);
    this.settings.theme.navbar.position = position;
    this.setClass(`navbar-position-${this.settings.theme.navbar.position}`);
  }

  changeNavbarVariant(variant) {
    this.removeClass(`navbar-variant-${this.settings.theme.navbar.variant}`);
    this.settings.theme.navbar.variant = variant;
    this.setClass(`navbar-variant-${this.settings.theme.navbar.variant}`);
  }

  hideChat(e, hide) {
    if (e) {
      this.settings.theme.chat.hide = e.checked;
      if (e.checked) {
        if (this.settings.theme.chat.position === 'left') {
          this.removeClass(
            `chat-position-${this.settings.theme.chat.position}`
          );
          this.settings.theme.chat.position = 'right';
        }
        this.setClass('chat-hide');
      } else {
        this.removeClass('chat-hide');
      }
    } else if (hide) {
      this.setClass('chat-hide');
    } else {
      this.removeClass('chat-hide');
    }
  }

  changeChatPosition(position) {
    this.removeClass('chat-hide');
    this.showSettingsBlock = false;
    this.removeClass(`chat-position-${this.settings.theme.chat.position}`);
    this.settings.theme.chat.position = position;
    this.setClass(`chat-position-${this.settings.theme.chat.position}`);
  }

  // setting body classes based on selected settings options :: start
  setClass(className) {
    this.renderer.addClass(document.body, className);
  }

  removeClass(attr) {
    document.body.classList.remove(attr);
  }

  setDefaultClasses() {
    this.removeAllClasses();

    // material options :: start
    this.renderer.addClass(document.body, 'mat-app-background');
    // this.renderer.addClass(document.body, 'mat-typography');
    // material options :: end

    this.renderer.addClass(
      document.body,
      `layout-${this.settings.theme.layout}`
    );
    this.renderer.addClass(document.body, `skin-${this.settings.theme.skin}`);

    this.renderer.addClass(
      document.body,
      `header-${this.settings.theme.header.state}`
    );
    this.renderer.addClass(
      document.body,
      `footer-${this.settings.theme.footer.state}`
    );
    this.renderer.addClass(
      document.body,
      `navbar-width-${this.settings.theme.navbar.width}`
    );
    this.renderer.addClass(
      document.body,
      `navbar-position-${this.settings.theme.navbar.position}`
    );
    this.renderer.addClass(
      document.body,
      `navbar-variant-${this.settings.theme.navbar.variant}`
    );
    this.renderer.addClass(
      document.body,
      `chat-position-${this.settings.theme.chat.position}`
    );
    if (this.settings.theme.chat.hide) {
      this.renderer.addClass(document.body, `chat-hide`);
    }
    if (!this.settings.theme.settingsVisible) {
      this.renderer.addClass(document.body, `settings-hide`);
    }
  }

  removeAllClasses() {
    const classes = Array.from(document.body.classList);
    classes.forEach(attr => {
      document.body.classList.remove(attr);
    });
  }
  // setting body classes based on selected settings options :: end

  showSettings() {
    this.showSettingsBlock = !this.showSettingsBlock;
  }

  copySettings() {
    this.code = `
    export class SettingsService {
      public options = new Settings(
        'adming',
        {
        colors: '${this.settings.theme.skin}', // dark-blue, dark-orange ...
        layout: '${this.settings.theme.layout}', // default, horizontal
        navbar: {
          width: '${this.settings.theme.navbar.width}',
          position: '${this.settings.theme.navbar.position}',
          variant: '${this.settings.theme.navbar.variant}'
        },
        header: {
          state: '${this.settings.theme.header.state}'
        },
        footer: {
          state: '${this.settings.theme.footer.state}'
        },
        chat: {
          hide: ${this.settings.theme.chat.hide},
          position: '${this.settings.theme.chat.position}'
        },
        settingsVisible: '${this.settings.theme.settingsVisible}'
      });
    }
    `;
    this.clipboardService.copyFromContent(this.code);
    this.toastr.success('Settings copied');
  }
}
