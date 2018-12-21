import { Component, ViewEncapsulation } from '@angular/core';
import { TodoService } from 'shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent {
  categories: any[];
  public todoList: Array<any>;
  public newTodoText = '';
  showCategory = false;

  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.getTodoList();
    this.categories = categories;
  }

  public getNotDeleted() {
    return this.todoList.filter((item: any) => {
      return !item.deleted;
    });
  }

  public addToDoItem($event) {
    const showLength = 7;
    if (
      ($event.which === 1 || $event.which === 13) &&
      this.newTodoText.trim() !== ''
    ) {
      if ((this.todoList.length = showLength - 1)) {
        this.todoList.slice(Math.max(this.todoList.length - showLength));
      }
      this.todoList.unshift({
        text: this.newTodoText,
        priority: 'primary'
      });
      this.newTodoText = '';
    }
  }

  toggleCategory() {
    this.showCategory = !this.showCategory;
  }
}

export let categories = [
  {
    name: 'All',
    icon: 'fa fa-list',
    openTasks: 3
  },
  {
    name: 'Completed',
    icon: 'fa fa-check-circle',
    openTasks: 0
  },
  {
    name: 'Shopping',
    icon: 'fa fa-shopping-cart',
    openTasks: 6
  },
  {
    name: 'To Read',
    icon: 'fa fa-book',
    openTasks: 4
  },
  {
    name: 'Home Projects',
    icon: 'fa fa-home',
    openTasks: 5
  },
  {
    name: 'Family',
    icon: 'fa fa-users',
    openTasks: 5
  }
];
