import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table-dynamically-changing-columns',
  templateUrl: './table-dynamically-changing-columns.component.html',
  styleUrls: ['./table-dynamically-changing-columns.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableDynamicallyChangingColumnsComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      const temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <button mat-raised-button (click)="addColumn()"> Add column </button>
    <button mat-raised-button (click)="removeColumn()"> Remove column </button>
    <button mat-raised-button (click)="shuffle()"> Shuffle </button>

    <table mat-table [dataSource]="data" class="mat-elevation-z8">
      <ng-container [matColumnDef]="column" *ngFor="let column of displayedColumns">
        <th mat-header-cell *matHeaderCellDef> {{column}} </th>
        <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
      <tr mat-row *matRowDef="let row; columns: columnsToDisplay;"></tr>
    </table>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface PeriodicElement {
      name: string;
      position: number;
      weight: number;
      symbol: string;
    }

    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];

    /**
     * @title Table dynamically changing the columns displayed
     */
    @Component({
      selector: 'table-dynamic-columns-example',
      styleUrls: ['table-dynamic-columns-example.css'],
      templateUrl: 'table-dynamic-columns-example.html',
    })
    export class TableDynamicColumnsExample {
      displayedColumns: string[] = ['name', 'weight', 'symbol', 'position'];
      columnsToDisplay: string[] = this.displayedColumns.slice();
      data: PeriodicElement[] = ELEMENT_DATA;

      addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
      }

      removeColumn() {
        if (this.columnsToDisplay.length) {
          this.columnsToDisplay.pop();
        }
      }

      shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // Swap
          let temp = this.columnsToDisplay[currentIndex];
          this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
          this.columnsToDisplay[randomIndex] = temp;
        }
      }
    }

    `;

    this.cssCode = `
    table {
      width: 100%;
    }
    button {
      margin: 16px 8px;
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
