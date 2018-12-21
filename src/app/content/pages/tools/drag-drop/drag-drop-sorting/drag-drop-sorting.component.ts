import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-sorting',
  templateUrl: './drag-drop-sorting.component.html',
  styleUrls: ['./drag-drop-sorting.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropSortingComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.htmlCode = `
    <div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
      <div class="example-box" *ngFor="let movie of movies" cdkDrag>{{movie}}</div>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

    /**
     * @title Drag&Drop sorting
     */
    @Component({
      selector: 'cdk-drag-drop-sorting-example',
      templateUrl: 'cdk-drag-drop-sorting-example.html',
      styleUrls: ['cdk-drag-drop-sorting-example.css'],
    })
    export class CdkDragDropSortingExample {
      movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi'
      ];

      drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
      }
    }
    `;

    this.cssCode = `
    example-list {
      width: 500px;
      max-width: 100%;
      border: solid 1px #ccc;
      min-height: 60px;
      display: block;
      background: white;
      border-radius: 4px;
      overflow: hidden;
    }

    .example-box {
      padding: 20px 10px;
      border-bottom: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      cursor: move;
      background: white;
      font-size: 14px;
    }

    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }

    .cdk-drag-placeholder {
      opacity: 0;
    }

    .cdk-drag-animating {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    .example-box:last-child {
      border: none;
    }

    .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }
    `;
  }

  copy(type: string) {
    let code: string;
    if (type === 'html') {
      code = this.htmlCode;
    } else if (type === 'ts') {
      code = this.tsCode;
    } else if (type === 'css') {
      code = this.cssCode;
    }

    this._clipboardService.copyFromContent(code);
    this.toastr.success('Code copied!');
  }
}
