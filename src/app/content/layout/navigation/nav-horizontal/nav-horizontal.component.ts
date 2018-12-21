import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { NavModel } from '../nav-core/nav.model';
import { NavigationEnd, Router } from '@angular/router';
import { NavHService } from '../nav-core/nav-h.service';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NavHorizontalComponent implements OnInit, AfterViewInit {
  navItems: Array<NavModel>;

  constructor(private navService: NavHService, private router: Router) {
    this.navItems = this.navService.getNavAsideItems();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const activeLink = this.navService.getActiveLink(this.navItems);
        this.navService.setActiveLink(this.navItems, activeLink);
      }
    });
  }

  ngOnInit() {
    const nav_wrapper = document.querySelector('#nav-horizontal');
    this.navService.generateNav(this.navItems, nav_wrapper);
  }

  ngAfterViewInit() {
    this.navService.showActiveSubNav(this.navItems);
    const activeLink = this.navService.getActiveLink(this.navItems);
    this.navService.setActiveLink(this.navItems, activeLink);
  }
}
