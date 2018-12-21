import { Component, OnInit, ViewEncapsulation, Renderer2, VERSION, ViewChildren, QueryList } from '@angular/core';
import { ToastrService, GlobalConfig, ToastContainerDirective, ToastNoAnimation } from 'ngx-toastr';
import { cloneDeep } from 'lodash';

interface Quote {
  title?: string;
  message?: string;
}

const quotes: Quote[] = [
  {
    title: 'Title',
    message: 'Message',
  },
  {
    title: '😃',
    message: 'Supports Emoji',
  },
  {
    message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
  },
  {
    message: 'Titles are not always needed',
  },
  {
    title: 'Title only 👊',
  },
  {
    title: '',
    message: `Supports Angular ${VERSION.full}`,
  },
];
const types = ['success', 'error', 'info', 'warning'];

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ToastrComponent {
  options: GlobalConfig;
  title = '';
  message = '';
  type = types[0];
  version = VERSION;
  enableBootstrap = false;
  private lastInserted: number[] = [];
  inline = false;
  inlinePositionIndex = 0;
  @ViewChildren(ToastContainerDirective) inlineContainers: QueryList<ToastContainerDirective>;

  constructor(public toastr: ToastrService, private renderer: Renderer2) {
    this.options = this.toastr.toastrConfig;
  }

  getMessage() {
    let m: string | undefined = this.message;
    let t: string | undefined = this.title;
    if (!this.title.length && !this.message.length) {
      const randomMessage = quotes[this.randomIntFromInterval(0, quotes.length - 1)];
      m = randomMessage.message;
      t = randomMessage.title;
    }
    return {
      message: m,
      title: t,
    };
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  openToast() {
    const { message, title } = this.getMessage();
    // Clone current config so it doesn't change when ngModel updates
    const opt = cloneDeep(this.options);
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }

  openToastNoAnimation() {
    const { message, title } = this.getMessage();
    const opt = cloneDeep(this.options);
    opt.toastComponent = ToastNoAnimation;
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }

  clearToasts() {
    this.toastr.clear();
  }
  clearLastToast() {
    this.toastr.clear(this.lastInserted.pop());
  }
  fixNumber(field: string) {
    this.options[field] = Number(this.options[field]);
  }
  setInlineClass(enableInline: boolean) {
    if (enableInline) {
      this.toastr.overlayContainer = this.inlineContainers.toArray()[this.inlinePositionIndex];
      this.options.positionClass = 'inline';
    } else {
      this.toastr.overlayContainer = undefined;
      this.options.positionClass = 'toast-top-right';
    }
  }
  setInlinePosition(index: number) {
    this.toastr.overlayContainer = this.inlineContainers.toArray()[index];
  }
  setClass(enableBootstrap: boolean) {
    const add = enableBootstrap ? 'bootstrap' : 'normal';
    const remove = enableBootstrap ? 'normal' : 'bootstrap';
    this.renderer.addClass(document.body, add);
    this.renderer.removeClass(document.body, remove);
  }


}
