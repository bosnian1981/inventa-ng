import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const routes = [
  { path: '', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
