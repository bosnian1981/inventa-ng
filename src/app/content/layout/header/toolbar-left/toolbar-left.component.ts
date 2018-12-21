import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-toolbar-left',
  templateUrl: './toolbar-left.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ToolbarLeftComponent implements OnInit {
  @ViewChild('searchCard') searchCard: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleSearchCard() {
    this.toggleCard(this.searchCard.nativeElement);
  }
  hideSearchCard() {
    this.toggleCard(this.searchCard.nativeElement, true);
  }

  toggleCard(card, hide?: boolean) {
    if (card.classList.contains('slideInLeft') || hide) {
      this.renderer.removeClass(card, 'slideInLeft');
      this.renderer.addClass(card, 'slideOutLeft');
      setTimeout(() => {
        this.renderer.addClass(card, 'd-none');
        this.renderer.removeClass(card, 'slideOutLeft');
      }, 300);
    } else {
      this.renderer.removeClass(card, 'd-none');
      this.renderer.removeClass(card, 'slideOutLeft');
      this.renderer.addClass(card, 'slideInLeft');
    }
  }
}
