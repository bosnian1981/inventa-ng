import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './to-do.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: ToDoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToDoComponent]
})
export class ToDoModule { }
