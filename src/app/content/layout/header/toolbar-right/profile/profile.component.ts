import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  showNavProfile = false;

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit() {}

  toggleNavProfile() {
    this.showNavProfile = !this.showNavProfile;
  }

  closeNavProfile(e: Event) {
    this.showNavProfile = false;
  }

  select(route?) {
    if (route) {
      this.router.navigate([route]);
    }
    this.closeList();
  }
  closeList(): any {
    const el = document.querySelector('#profile-card');
    this.renderer.setAttribute(el, 'class', 'mda-card d-none');
  }
}
