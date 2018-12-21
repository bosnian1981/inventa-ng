import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  showTasks = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleTasks() {
    this.showTasks = !this.showTasks;
  }

  closeTasks(e: Event) {
    this.showTasks = false;
  }

  select() {
    this.closeList();
  }
  closeList(): any {
    const el = document.querySelector('#tasks-card');
    this.renderer.setAttribute(el, 'class', 'mda-card d-none');
  }
}
