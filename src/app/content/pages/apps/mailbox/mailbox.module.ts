import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxComponent } from './mailbox.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: MailboxComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MailboxComponent]
})
export class MailboxModule { }
