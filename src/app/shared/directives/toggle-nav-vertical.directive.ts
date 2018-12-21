import { Directive, HostListener, Renderer2, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Directive({
  selector: '[appToggleNavVertical]'
})
export class ToggleNavVerticalDirective implements OnInit {
  isSmallScreen = false;
  constructor(
    private renderer: Renderer2,
    public breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1199px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
          this.renderer.removeClass(document.body, 'navbar-above');
        }
      });

    setTimeout(() => {
      const resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }, 500);
  }

  @HostListener('click')
  onClick() {
    this.showhideElement();
  }
  showhideElement() {
    const body = document.body;
    if (this.isSmallScreen) {
      if (body.classList.contains('navbar-width-hide')) {
        this.renderer.removeClass(body, 'navbar-width-hide');
        this.renderer.addClass(body, 'navbar-above');
      } else if (body.classList.contains('navbar-above')) {
        this.renderer.removeClass(body, 'navbar-above');
        this.renderer.addClass(body, 'navbar-width-hide');
      }
    } else {
      if (body.classList.contains('navbar-width-default')) {
        this.renderer.removeClass(body, 'navbar-width-default');
        this.renderer.addClass(body, 'navbar-width-folded');
      } else if (body.classList.contains('navbar-width-folded')) {
        this.renderer.removeClass(body, 'navbar-width-folded');
        this.renderer.addClass(body, 'navbar-width-default');
      } else {
        this.renderer.removeClass(body, 'navbar-width-hide');
        this.renderer.removeClass(body, 'navbar-width-folded');
        this.renderer.addClass(body, 'navbar-width-default');
      }
    }

    setTimeout(() => {
      const resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }, 300);
  }
}
