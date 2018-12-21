import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { EditGeneralComponent } from './profile/profile-edit/edit-general/edit-general.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, ProfileEditComponent, EditGeneralComponent]
})
export class UserModule {}
