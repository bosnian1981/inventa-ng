import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { authRouting } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
} from '@angular/material';
import { SettingsComponent } from 'layout/_settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    authRouting
  ],
  declarations: [LoginComponent, RegisterComponent, RecoveryComponent]
})
export class AuthModule {}
