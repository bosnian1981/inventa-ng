import {
  Component,
  ViewEncapsulation,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SettingsService]
})
export class LoginComponent implements AfterViewInit {
  public router: Router;
  public form: FormGroup;
  checked = false;
  settings: Settings;

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    router: Router,
    fb: FormBuilder,
    private toastr: ToastrService,
    private settingService: SettingsService,
    private renderer: Renderer2
  ) {
    this.settings = this.settingService.options;
    this.setDefaultClasses();

    this.router = router;
    this.form = fb.group({
      email: this.email,
      password: this.password
    });
  }

  public onSubmit(values: Object): void {
    this.router.navigate(['dashboard']);
    this.toastr.success('Logged in successfully');
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
      this.renderer.addClass(
        document.body,
        `skin-${localStorage.getItem('skin')}`
      );
    } else {
      this.renderer.addClass(document.body, `skin-${this.settings.theme.skin}`);
    }
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
  }
}
