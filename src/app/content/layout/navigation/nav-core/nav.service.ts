import { Location } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavData } from './nav.data';
import { NavModel } from './nav.model';

@Injectable()
export class NavService {
  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    private location: Location,
    private router: Router
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public getNavAsideItems(): Array<NavModel> {
    return NavData;
  }

  public createNav(nav: Array<NavModel>, nativeElement) {
    const nav0 = this.renderer.createElement('div');
    this.renderer.setAttribute(nav0, 'id', 'nav0');
    nav.forEach(navItem => {
      if (navItem.parentId === 0) {
        const subNav = this.createNavItem(nav, navItem);
        this.renderer.appendChild(nav0, subNav);
      }
    });
    this.renderer.appendChild(nativeElement, nav0);
  }

  public createNavItem(nav: Array<NavModel>, navItem) {
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'card');
    this.renderer.setAttribute(div, 'id', 'nav' + navItem.id);
    const link = this.renderer.createElement('a');
    this.renderer.addClass(link, 'nav-item-link');
    this.renderer.setAttribute(link, 'data-toggle', 'tooltip');
    this.renderer.setAttribute(link, 'data-placement', 'right');
    this.renderer.setAttribute(link, 'data-animation', 'false');
    this.renderer.setAttribute(
      link,
      'data-container',
      '.nav-tooltip-place'
    );
    this.renderer.setAttribute(link, 'data-original-title', navItem.title);
    const icon = this.renderer.createElement('i');
    this.renderer.addClass(icon, navItem.iconType);
    if (navItem.icon != null) {
      this.renderer.addClass(icon, 'fa-' + navItem.icon);
    } else {
      this.renderer.addClass(icon, 'fa-' + 'circle');
      this.renderer.addClass(icon, 'sm');
    }
    this.renderer.addClass(icon, 'fa-' + (navItem.icon != null ? navItem.icon : 'circle'));
    this.renderer.appendChild(link, icon);

    const span = this.renderer.createElement('span');
    this.renderer.addClass(span, 'nav-title');
    this.renderer.appendChild(link, span);
    const navText = this.renderer.createText(navItem.title);
    this.renderer.appendChild(span, navText);
    this.renderer.setAttribute(link, 'id', 'link' + navItem.id);
    this.renderer.addClass(link, 'transition');
    this.renderer.appendChild(div, link);
    if (navItem.routerLink) {
      this.renderer.listen(link, 'click', () => {
        this.router.navigate([navItem.routerLink]);
        this.setActiveLink(nav, link);
        this.closeOtherSubNavs(div);
      });
    }
    if (navItem.href) {
      this.renderer.setAttribute(link, 'href', navItem.href);
    }
    if (navItem.target) {
      this.renderer.setAttribute(link, 'target', navItem.target);
    }
    if (navItem.hasSubNav) {
      this.renderer.addClass(link, 'collapsed');
      const caret = this.renderer.createElement('b');
      this.renderer.addClass(caret, 'fa');
      this.renderer.addClass(caret, 'fa-angle-up');
      this.renderer.appendChild(link, caret);
      this.renderer.setAttribute(link, 'data-toggle', 'collapse');
      this.renderer.setAttribute(link, 'href', '#collapse' + navItem.id);
      const collapse = this.renderer.createElement('div');
      this.renderer.setAttribute(collapse, 'id', 'collapse' + navItem.id);
      this.renderer.setAttribute(
        collapse,
        'data-parent',
        '#nav' + navItem.parentId
      );
      this.renderer.addClass(collapse, 'collapse');
      this.renderer.appendChild(div, collapse);
      this.createSubNav(nav, navItem.id, collapse);
    }
    return div;
  }

  private createSubNav(nav: Array<NavModel>, navItemId, parentElement) {
    const navs = nav.filter(item => item.parentId === navItemId);
    navs.forEach(navItem => {
      let subNav = null;
      subNav = this.createNavItem(nav, navItem);
      this.renderer.appendChild(parentElement, subNav);
    });
  }

  private closeOtherSubNavs(elem) {
    const children = this.renderer.parentNode(elem).children;
    for (let i = 0; i < children.length; i++) {
      const child = this.renderer.nextSibling(children[i].children[0]);
      if (child) {
        this.renderer.addClass(children[i].children[0], 'collapsed');
        this.renderer.removeClass(child, 'show');
      }
    }
  }

  public getActiveLink(nav: Array<NavModel>) {
    const url = this.location.path();
    const routerLink = url; // url.substring(1, url.length);
    const activeNavItem = nav.filter(item => item.routerLink === routerLink);
    if (activeNavItem[0]) {
      const activeLink = document.querySelector('#link' + activeNavItem[0].id);
      return activeLink;
    }
    return false;
  }

  public setActiveLink(nav: Array<NavModel>, link) {
    if (link) {
      nav.forEach(navItem => {
        const activeLink = document.querySelector('#link' + navItem.id);
        if (activeLink) {
          if (activeLink.classList.contains('active-link')) {
            activeLink.classList.remove('active-link');
          }
        }
      });
      this.renderer.addClass(link, 'active-link');
    }
  }

  public showActiveSubNav(nav: Array<NavModel>) {
    nav = this.getNavAsideItems();
    const url = this.location.path();
    const routerLink = url; // url.substring(1, url.length);
    const activeNavItem = nav.filter(item => item.routerLink === routerLink);
    if (activeNavItem[0]) {
      const activeLink = document.querySelector('#link' + activeNavItem[0].id);
      let parent = this.renderer.parentNode(activeLink);
      while (this.renderer.parentNode(parent)) {
        parent = this.renderer.parentNode(parent);
        if (parent.className === 'collapse') {
          const parentNav = nav.filter(
            item => item.id === activeNavItem[0].parentId
          );
          const activeParentLink = document.querySelector(
            '#link' + parentNav[0].id
          );
          this.renderer.removeClass(activeParentLink, 'collapsed');
          this.renderer.addClass(parent, 'show');
        }
        if (parent.classList.contains('navigation')) {
          break;
        }
      }
    }
  }

  public addNewNavItem(nav: Array<NavModel>, newNavItem, type) {
    nav = this.getNavAsideItems();
    nav.push(newNavItem);
    if (newNavItem.parentId !== 0) {
      const parentNav = nav.filter(item => item.id === newNavItem.parentId);
      if (parentNav.length) {
        if (!parentNav[0].hasSubNav) {
          parentNav[0].hasSubNav = true;
        }
      }
    }
    let nav_wrapper = null;
    nav_wrapper = document.getElementById('sidenav');
    while (nav_wrapper.firstChild) {
      nav_wrapper.removeChild(nav_wrapper.firstChild);
    }
    this.createNav(nav, nav_wrapper);
  }
}

