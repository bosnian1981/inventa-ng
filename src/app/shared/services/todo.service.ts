import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private todoList = [
    { text: 'Check emails', priority: 'primary' },
    { text: 'Write blog post', priority: 'secondary'},
    { text: 'Complete reviews', priority: 'tertiary'},
    { text: 'Send meeting follow up email', priority: 'quaternary'},
    { text: 'Present ideas from marketing meeting', priority: 'primary'},
    { text: 'Test all forms', priority: 'secondary'},
    { text: 'Ship completed redesign', priority: 'tertiary'},
  ];

  getTodoList() {
    return this.todoList;
  }
}
