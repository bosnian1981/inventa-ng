import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-options',
  templateUrl: './modal-options.component.html',
  styleUrls: ['./modal-options.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalOptionsComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  closeResult: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title">Modal title</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>One fine body&hellip;</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>
  </div>
</ng-template>

<button class="btn btn-outline-primary mb-2 mr-2" (click)="openWindowCustomClass(content)">Modal with window custom class</button>
<button class="btn btn-outline-primary mb-2 mr-2" (click)="openBackDropCustomClass(content)">Modal with backdrop custom class</button>
<button class="btn btn-outline-primary mb-2 mr-2" (click)="openSm(content)">Small modal</button>
<button class="btn btn-outline-primary mb-2 mr-2" (click)="openLg(content)">Large modal</button>
<button class="btn btn-outline-primary mb-2 mr-2" (click)="openVerticallyCentered(content)">Modal vertically centered</button>
    `;

    this.tsCode = `
    import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-options',
  templateUrl: './modal-options.html',
  encapsulation: ViewEncapsulation.None
})
export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
    `;

    this.cssCode = `
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
    `;
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  copy(type: string) {
    let code: string;
    if (type === 'html') {
      code = this.htmlCode;
    } else if (type === 'ts') {
      code = this.tsCode;
    } else if (type === 'css') {
      code = this.cssCode;
    }

    this._clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
