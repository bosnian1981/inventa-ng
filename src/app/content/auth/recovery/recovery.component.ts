import { Location } from '@angular/common';
import { Component, ViewEncapsulation, AfterViewInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SettingsService } from 'layout/_settings/settings.service';
import { Settings } from 'layout/_settings/settings.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SettingsService]
})
export class RecoveryComponent implements AfterViewInit {
  public router: Router;
  public form: FormGroup;
  checked = false;
  settings: Settings;

  email = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(
    router: Router,
    fb: FormBuilder,
    private location: Location,
    private toastr: ToastrService,
    private settingService: SettingsService,
    private renderer: Renderer2
  ) {
    this.settings = this.settingService.options;
    this.setDefaultClasses();

    this.router = router;
    this.form = fb.group({
      email: this.email
    });
  }

  public onSubmit(values: Object): void {
    this.router.navigate(['account/login']);
    this.toastr.success('A new password has been sent to your e-mail address');
  }

  cancel(e) {
    e.preventDefault();
    this.location.back();
  }

  setDefaultClasses() {
    const classes = Array.from(document.body.classList);
    classes.forEach(attr => {
      document.body.classList.remove(attr);
    });

    this.renderer.addClass(document.body, 'mat-app-background');
    this.renderer.addClass(
      document.body,
      `layout-${this.settings.theme.layout}`
    );

    if (localStorage.getItem('skin')) {
      this.renderer.addClass(document.body, `skin-${localStorage.getItem('skin')}`);
    } else {
      this.renderer.addClass(document.body, `skin-${this.settings.theme.skin}`);
    }
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}
