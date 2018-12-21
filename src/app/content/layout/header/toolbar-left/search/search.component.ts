import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  showSearchBox = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSearch() {
    this.showSearchBox = !this.showSearchBox;
  }

  closeSearchBox() {
    this.showSearchBox = false;
  }
}
