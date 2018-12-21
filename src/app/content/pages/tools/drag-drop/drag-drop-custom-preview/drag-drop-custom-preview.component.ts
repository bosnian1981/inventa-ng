import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-custom-preview',
  templateUrl: './drag-drop-custom-preview.component.html',
  styleUrls: ['./drag-drop-custom-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DragDropCustomPreviewComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  // tslint:disable:max-line-length
  movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
    },
    {
      title: 'Episode II - Attack of the Clones',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
    },
    {
      title: 'Episode III - Revenge of the Sith',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
    },
    {
      title: 'Episode IV - A New Hope',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
    },
    {
      title: 'Episode V - The Empire Strikes Back',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
    },
    {
      title: 'Episode VI - Return of the Jedi',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
    },
    {
      title: 'Episode VII - The Force Awakens',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
    },
    {
      title: 'Episode VIII - The Last Jedi',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
    }
  ];
  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <div cdkDropList class="example-list" (cdkDropListDropped)="drop($event)">
      <div class="example-box" *ngFor="let movie of movies" cdkDrag>
        {{movie.title}}
        <img *cdkDragPreview [src]="movie.poster" [alt]="movie.title">
      </div>
    </div>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

    /**
     * @title Drag&Drop custom preview
     */
    @Component({
      selector: 'cdk-drag-drop-custom-preview-example',
      templateUrl: 'cdk-drag-drop-custom-preview-example.html',
      styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
    })
    export class CdkDragDropCustomPreviewExample {
      // tslint:disable:max-line-length
      movies = [
        {
          title: 'Episode I - The Phantom Menace',
          poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
        },
        {
          title: 'Episode II - Attack of the Clones',
          poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
        },
        {
          title: 'Episode III - Revenge of the Sith',
          poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
        },
        {
          title: 'Episode IV - A New Hope',
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
        },
        {
          title: 'Episode V - The Empire Strikes Back',
          poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
        },
        {
          title: 'Episode VI - Return of the Jedi',
          poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
        },
        {
          title: 'Episode VII - The Force Awakens',
          poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
        },
        {
          title: 'Episode VIII - The Last Jedi',
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
        }
      ];
      // tslint:enable:max-line-length

      drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
      }
    }

    `;

    this.cssCode = `
    .example-list {
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
