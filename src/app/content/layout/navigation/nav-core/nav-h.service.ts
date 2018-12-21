import { Location } from '@angular/common';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavData } from './nav.data';
import { NavModel } from './nav.model';

@Injectable()
export class NavHService {
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

  // generate first level :: start
  generateNav(navData: NavModel[], nativeElement) {
    const navBase = this.renderer.createElement('ul');
    this.renderer.setAttribute(navBase, 'class', 'nav');
    const firstLevelItems = navData.filter(item => item.parentId === 0);
    let index = 0;
    firstLevelItems.forEach(navItem => {
      index += 1;
      if (index <= 8) {
        const firstLevelNavigation = this.generateNavLevel1(
          navData,
          navItem,
          firstLevelItems.length,
          index
        );
        this.renderer.appendChild(navBase, firstLevelNavigation);
      }
    });
    this.renderer.appendChild(nativeElement, navBase);
  }

  createElementWithClasses(el, cl) {
    const element = this.renderer.createElement(el);
    this.renderer.setAttribute(element, 'class', cl);
    return element;
  }

  // generate items for first level :: start
  generateNavLevel1(navData: NavModel[], navItem, sum, index) {
    // create list item - li :: start
    const li = this.createElementWithClasses('li', 'nav-item');
    if (navItem.hasSubNav) {
      this.renderer.addClass(li, 'dropdown');
    }
    // create list item - li :: end
    // create link :: start
    const link = this.createElementWithClasses('a', 'nav-link');
    if (navItem.routerLink || navItem.href) {
      if (navItem.routerLink) {
        this.renderer.listen(link, 'click', () => {
          this.router.navigate([navItem.routerLink]);
          this.setActiveLink(navData, link);
        });
      }
      if (navItem.href) {
        this.renderer.setAttribute(link, 'href', navItem.href);
      }
      if (navItem.target) {
        this.renderer.setAttribute(link, 'target', navItem.target);
      }
    } else {
      this.renderer.setAttribute(link, 'href', 'javascript:;');
      this.renderer.setAttribute(link, 'data-toggle', 'dropdown');
      this.renderer.setAttribute(link, 'role', 'button');
      this.renderer.setAttribute(link, 'aria-haspopup', 'true');
      this.renderer.setAttribute(link, 'aria-expanded', 'false');
    }

    const iconClasses = navItem.icon
      ? navItem.iconType + ' fa-' + navItem.icon
      : 'fa fa-circle';
    const icon = this.createElementWithClasses('i', iconClasses);
    this.renderer.appendChild(link, icon);
    const navText = this.renderer.createText(navItem.title);
    this.renderer.appendChild(link, navText);

    if (navItem.hasSubNav) {
      const caret = this.createElementWithClasses('b', 'fa fa-angle-down');
      this.renderer.appendChild(link, caret);
      // generate subnavigation :: start
      const dropDownMenu = this.createElementWithClasses(
        'div',
        sum - index < 5 ? 'dropdown-menu dropdown-menu-right' : 'dropdown-menu'
      );
      this.generateNavLevel2(navData, navItem.id, dropDownMenu);
      this.renderer.appendChild(li, dropDownMenu);
      // generate subnavigation :: end
    }
    this.renderer.appendChild(li, link);
    // create link :: end

    return li;
  }
  // generate items for first level :: end
  // generate first level :: end

  // generate subnavigation level 1 :: start
  generateNavLevel2(navData, navItemId, parentElement) {
    const navItems = navData.filter(item => item.parentId === navItemId);
    const row = this.createElementWithClasses('div', 'subnav-column');
    navItems.forEach(navItem => {
      // tslint:disable-next-line:max-line-length
      const col = this.createElementWithClasses(
        'div',
        navItem.hasSubNav
          ? `col-subnav ${
              navItems.filter(item => item.hasSubNav).length === 1
                ? 'alone'
                : ''
            }`
          : 'col-no-subnav'
      );
      // create link :: start
      const link = this.createElementWithClasses('a', 'nav-link');
      this.renderer.setAttribute(link, 'href', 'javascript:;');

      this.createElementWithClasses(
        'i',
        navItem.icon ? navItem.iconType + ' fa-' + navItem.icon : 'fa fa-circle'
      );
      const icon = this.createElementWithClasses(
        'i',
        navItem.icon ? navItem.iconType + ' fa-' + navItem.icon : 'fa fa-circle'
      );
      const navText = this.renderer.createText(navItem.title);
      this.renderer.appendChild(link, icon);
      this.renderer.appendChild(link, navText);
      if (navItem.routerLink) {
        this.renderer.listen(link, 'click', () => {
          this.router.navigate([navItem.routerLink]);
          this.setActiveLink(navData, link);
        });
      }
      if (navItem.href) {
        this.renderer.setAttribute(link, 'href', navItem.href);
      }
      if (navItem.target) {
        this.renderer.setAttribute(link, 'target', navItem.target);
      }

      this.renderer.appendChild(col, link);

      if (navItem.hasSubNav) {
        this.renderer.addClass(col, 'has-subnav');
        const caret = this.createElementWithClasses(
          'b',
          'fa fa-long-arrow-down'
        );
        this.renderer.appendChild(link, caret);
        // generete subitems :: start
        this.generateNavLevel3(navData, navItem.id, col);
        // generete subitems :: end
      }
      // create link :: start

      this.renderer.appendChild(row, col);
      this.renderer.appendChild(parentElement, row);
    });
  }
  // generate subnavigation level 1 :: end

  // generate subnavigation level 2 :: start
  generateNavLevel3(navData, navItemId, parentElement) {
    const navItems = navData.filter(item => item.parentId === navItemId);
    const div = this.createElementWithClasses('div', 'subnav level3');

    navItems.forEach(navItem => {
      const link = this.renderer.createElement('a');
      if (!navItem.hasSubNav) {
        this.renderer.addClass(link, 'nav-link');
        this.renderer.setAttribute(link, 'href', 'javascript:;');
        const icon = this.createElementWithClasses(
          'i',
          navItem.icon
            ? navItem.iconType + ' fa-' + navItem.icon
            : 'fa fa-circle'
        );
        const navText = this.renderer.createText(navItem.title);
        this.renderer.appendChild(link, icon);
        this.renderer.appendChild(link, navText);
        if (navItem.routerLink) {
          this.renderer.listen(link, 'click', () => {
            this.router.navigate([navItem.routerLink]);
            this.setActiveLink(navData, link);
          });
        }
        if (navItem.href) {
          this.renderer.setAttribute(link, 'href', navItem.href);
        }
        if (navItem.target) {
          this.renderer.setAttribute(link, 'target', navItem.target);
        }
        this.renderer.appendChild(div, link);
      } else {
        this.renderer.addClass(link, 'has-items');
        this.renderer.addClass(link, 'nav-link');
        this.renderer.setAttribute(link, 'href', 'javascript:;');
        const icon = this.renderer.createElement('i');
        this.renderer.setAttribute(
          icon,
          'class',
          navItem.icon
            ? navItem.iconType + ' fa-' + navItem.icon
            : 'fa fa-circle'
        );
        const navText = this.renderer.createText(navItem.title);
        this.renderer.appendChild(link, icon);
        this.renderer.appendChild(link, navText);
        const caret = this.createElementWithClasses('b', 'fa fa-angle-right');
        this.renderer.appendChild(link, caret);
        this.generateNavLevel4(navData, navItem.id, link);
        this.renderer.appendChild(div, link);
      }
    });
    this.renderer.appendChild(parentElement, div);
  }
  // generate subnavigation level 2 :: end

  generateNavLevel4(navData, navItemId, parentElement) {
    const navItems = navData.filter(item => item.parentId === navItemId);
    const div = this.createElementWithClasses('div', 'subnav level4');
    const innerDiv = this.createElementWithClasses('div', 'subnav-inner');
    this.renderer.appendChild(div, innerDiv);
    navItems.forEach(navItem => {
      const link = this.createElementWithClasses(
        'a',
        !navItem.hasSubNav ? 'nav-link' : 'nav-link has-items'
      );
      if (!navItem.hasSubNav) {
        this.renderer.setAttribute(link, 'href', 'javascript:;');
        const icon = this.createElementWithClasses(
          'i',
          navItem.icon
            ? navItem.iconType + ' fa-' + navItem.icon
            : 'fa fa-circle'
        );
        const navText = this.renderer.createText(navItem.title);
        this.renderer.appendChild(link, icon);
        this.renderer.appendChild(link, navText);
        if (navItem.routerLink) {
          this.renderer.listen(link, 'click', () => {
            this.router.navigate([navItem.routerLink]);
            this.setActiveLink(navData, link);
          });
        }
        if (navItem.href) {
          this.renderer.setAttribute(link, 'href', navItem.href);
        }
        if (navItem.target) {
          this.renderer.setAttribute(link, 'target', navItem.target);
        }
        this.renderer.appendChild(innerDiv, link);
      } else {
        this.renderer.setAttribute(link, 'href', 'javascript:;');
        const icon = this.createElementWithClasses(
          'i',
          navItem.icon
            ? navItem.iconType + ' fa-' + navItem.icon
            : 'fa fa-circle'
        );
        const navText = this.renderer.createText(navItem.title);
        this.renderer.appendChild(link, icon);
        this.renderer.appendChild(link, navText);
        const caret = this.createElementWithClasses('b', 'fa fa-angle-right');
        this.renderer.appendChild(link, caret);
        this.renderer.appendChild(innerDiv, link);

        this.generateNavLevel5(navData, navItem.id, innerDiv);
      }
    });
    this.renderer.appendChild(parentElement, div);
  }

  generateNavLevel5(navData, navItemId, parentElement) {
    const navItems = navData.filter(item => item.parentId === navItemId);
    const div = this.createElementWithClasses('div', 'subnav level5');
    const innerDiv = this.createElementWithClasses('div', 'subnav-inner');
    this.renderer.appendChild(div, innerDiv);
    navItems.forEach(navItem => {
      const link = this.createElementWithClasses('a', 'nav-link has-items');
      this.renderer.setAttribute(link, 'href', 'javascript:;');
      const icon = this.createElementWithClasses(
        'i',
        navItem.icon ? navItem.iconType + ' fa-' + navItem.icon : 'fa fa-circle'
      );
      const navText = this.renderer.createText(navItem.title);
      this.renderer.appendChild(link, icon);
      this.renderer.appendChild(link, navText);
      this.renderer.appendChild(innerDiv, link);

      this.generateNavLevel4(navData, navItem.id, div);
    });
    this.renderer.appendChild(parentElement, div);
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
    this.generateNav(nav, nav_wrapper);
  }
}
