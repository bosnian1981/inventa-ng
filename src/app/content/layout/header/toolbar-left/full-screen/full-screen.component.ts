import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FullScreenComponent implements OnInit {
  fullscreen = false;
  constructor(private toastr: ToastrService) {}

  ngOnInit() {}

  toggleFullScreen() {
    if (!this.fullscreen) {
      this.getFullScreen(document.documentElement);
    } else {
      this.exitFullScreen();
    }
    this.fullscreen = !this.fullscreen;
  }

  getFullScreen(el) {
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else {
      this.toastr.error('Fullscreen is not supported.');
      this.fullscreen = false;
    }
  }

  exitFullScreen() {
    if (document['exitFullscreen']) {
      document['exitFullscreen']();
   } else if (document['webkitExitFullscreen']) {
      document['webkitExitFullscreen']();
   } else if (document['mozCancelFullScreen']) {
      document['mozCancelFullScreen']();
   } else if (document['msExitFullscreen']) {
      document['msExitFullscreen']();
   } else {
    this.toastr.error('Fullscreen is not supported.');
   }
  }
}
