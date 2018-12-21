import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoTopComponent implements AfterViewInit {
  @Input()
  position = 400;

  @ViewChild('scrollTop')
  private _selector: ElementRef;

  ngAfterViewInit() {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    const el = this._selector.nativeElement;
    window.scrollY > this.position
      ? el.classList.add('show')
      : el.classList.remove('show');
  }
}
