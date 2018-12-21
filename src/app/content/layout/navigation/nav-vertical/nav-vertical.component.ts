import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavModel } from '../nav-core/nav.model';
import { NavService } from '../nav-core/nav.service';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavVerticalComponent implements OnInit, AfterViewInit {
  navItems: Array<NavModel>;

  constructor(private navService: NavService, private router: Router) {
    this.navItems = this.navService.getNavAsideItems();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const activeLink = this.navService.getActiveLink(this.navItems);
        this.navService.setActiveLink(this.navItems, activeLink);
      }
    });
  }

  ngOnInit() {
    const nav_wrapper = document.querySelector('#nav-vertical');
    this.navService.createNav(this.navItems, nav_wrapper);
  }

  ngAfterViewInit() {
    this.navService.showActiveSubNav(this.navItems);
    const activeLink = this.navService.getActiveLink(this.navItems);
    this.navService.setActiveLink(this.navItems, activeLink);
  }
}
