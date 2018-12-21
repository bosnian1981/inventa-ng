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
  selector: 'app-basic-use-of-table-mat-table',
  templateUrl: './basic-use-of-table-mat-table.component.html',
  styleUrls: ['./basic-use-of-table-mat-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicUseOfTableMatTableComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

    ngOnInit() {
      this.htmlCode = `
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

        <!--- Note that these columns can be defined in any order.
              The actual rendered columns are set as a property on the row definition" -->

        <!-- Position Column -->
        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef> No. </th>
          <td mat-cell *matCellDef="let element"> {{element.position}} </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef> Weight </th>
          <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="symbol">
          <th mat-header-cell *matHeaderCellDef> Symbol </th>
          <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
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

      @Component({
        selector: 'table-basic-example',
        styleUrls: ['table-basic-example.css'],
        templateUrl: 'table-basic-example.html',
      })
      export class TableBasicExample {
        displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
        dataSource = ELEMENT_DATA;
      }
      `;

      this.cssCode = `
      table {
        width: 100%;
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
