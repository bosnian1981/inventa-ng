import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { User } from 'shared/models/user';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit, AfterViewInit {
  showMessages = false;
  users: User[];
  randomTimes: string[] = [];
  constructor(private userService: UserService, private renderer: Renderer2) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users.filter(u => u.id !== 2 && u.id < 6); // 2 is imaginary userId of logged user
    });
  }

  getRandomTime() {
    return (
      Math.floor(Math.random() * 12) + ':' + Math.floor(Math.random() * 60)
    );
  }

  ngAfterViewInit(): void {
    for (let i = 10; i >= 1; i--) {
      this.randomTimes.push(i + ':' + Math.floor(Math.random() * 60));
    }
  }

  select() {
    this.closeList();
  }
  closeList(): any {
    const el = document.querySelector('#messages-card');
    this.renderer.setAttribute(el, 'class', 'mda-card d-none');
  }
}
