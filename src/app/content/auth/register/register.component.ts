import { Location } from '@angular/common';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  Renderer2
} from '@angular/core';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [SettingsService]
})
export class RegisterComponent implements AfterViewInit {
  public router: Router;
  public form: FormGroup;
  checked = false;
  settings: Settings;

  fullName = new FormControl('', Validators.required);

  email = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', Validators.required);
  confirmPassword = new FormControl('');
  matcher = new MyErrorStateMatcher();

  constructor(
    fb: FormBuilder,
    private location: Location,
    private toastr: ToastrService,
    private settingService: SettingsService,
    router: Router,
    private renderer: Renderer2
  ) {
    this.settings = this.settingService.options;
    this.setDefaultClasses();

    this.router = router;
    this.form = fb.group(
      {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      },
      { validator: matchingPasswords('password', 'confirmPassword') }
    );
  }

  public onSubmit(values: Object): void {
    this.router.navigate(['dashboard']);
    this.toastr.success('Successfully registered and logged in');
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

export function matchingPasswords(
  passwordKey: string,
  passwordConfirmationKey: string
) {
  return (group: FormGroup) => {
    const password = group.controls[passwordKey];
    const passwordConfirmation = group.controls[passwordConfirmationKey];
    if (password.value !== passwordConfirmation.value) {
      return passwordConfirmation.setErrors({ mismatchedPasswords: true });
    }
  };
}
