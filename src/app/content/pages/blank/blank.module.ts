import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: BlankComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlankComponent]
})
export class BlankModule { }
