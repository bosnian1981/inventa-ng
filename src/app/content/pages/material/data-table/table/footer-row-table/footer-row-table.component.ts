import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-footer-row-table',
  templateUrl: './footer-row-table.component.html',
  styleUrls: ['./footer-row-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterRowTableComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <table mat-table [dataSource]="transactions" class="mat-elevation-z8">
      <!-- Item Column -->
      <ng-container matColumnDef="item">
        <th mat-header-cell *matHeaderCellDef> Item </th>
        <td mat-cell *matCellDef="let transaction"> {{transaction.item}} </td>
        <td mat-footer-cell *matFooterCellDef> Total </td>
      </ng-container>

      <!-- Cost Column -->
      <ng-container matColumnDef="cost">
        <th mat-header-cell *matHeaderCellDef> Cost </th>
        <td mat-cell *matCellDef="let transaction"> {{transaction.cost | currency}} </td>
        <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      <tr mat-footer-row *matFooterRowDef="displayedColumns"></tr>
    </table>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface Transaction {
      item: string;
      cost: number;
    }

    /**
     * @title Footer row table
     */
    @Component({
      selector: 'table-footer-row-example',
      styleUrls: ['table-footer-row-example.css'],
      templateUrl: 'table-footer-row-example.html',
    })
    export class TableFooterRowExample {
      displayedColumns: string[] = ['item', 'cost'];
      transactions: Transaction[] = [
        {item: 'Beach ball', cost: 4},
        {item: 'Towel', cost: 5},
        {item: 'Frisbee', cost: 2},
        {item: 'Sunscreen', cost: 4},
        {item: 'Cooler', cost: 25},
        {item: 'Swim suit', cost: 15},
      ];

      /** Gets the total cost of all transactions. */
      getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
      }
    }

    `;

    this.cssCode = `
    table {
      width: 100%;
    }
    tr.mat-footer-row {
      font-weight: bold;
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
