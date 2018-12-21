import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dynamic-grid-list',
  templateUrl: './dynamic-grid-list.component.html',
  styleUrls: ['./dynamic-grid-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicGridListComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-grid-list cols="4" rowHeight="100px">
      <mat-grid-tile
          *ngFor="let tile of tiles"
          [colspan]="tile.cols"
          [rowspan]="tile.rows"
          [style.background]="tile.color">
        {{tile.text}}
      </mat-grid-tile>
    </mat-grid-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface Tile {
      color: string;
      cols: number;
      rows: number;
      text: string;
    }

    /**
     * @title Dynamic grid-list
     */
    @Component({
      selector: 'grid-list-dynamic-example',
      templateUrl: 'grid-list-dynamic-example.html',
      styleUrls: ['grid-list-dynamic-example.css'],
    })
    export class GridListDynamicExample {
      tiles: Tile[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];
    }
    `;

    this.cssCode = `
    /** No CSS for this example */
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
