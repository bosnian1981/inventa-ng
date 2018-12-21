import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table-showing-each-row-properties',
  templateUrl: './table-showing-each-row-properties.component.html',
  styleUrls: ['./table-showing-each-row-properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableShowingEachRowPropertiesComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
  data: string[] = ['one', 'two', 'three', 'four', 'five'];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <table mat-table [dataSource]="data" class="mat-elevation-z8">
      <!-- Index Column -->
      <ng-container matColumnDef="$implicit">
        <th mat-header-cell *matHeaderCellDef> $implicit </th>
        <td mat-cell *matCellDef="let data"> {{data}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="index">
        <th mat-header-cell *matHeaderCellDef> index </th>
        <td mat-cell *matCellDef="let index = index"> {{index}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="count">
        <th mat-header-cell *matHeaderCellDef> count </th>
        <td mat-cell *matCellDef="let count = count"> {{count}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="first">
        <th mat-header-cell *matHeaderCellDef> first </th>
        <td mat-cell *matCellDef="let first = first"> {{first}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="last">
        <th mat-header-cell *matHeaderCellDef> last </th>
        <td mat-cell *matCellDef="let last = last"> {{last}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="even">
        <th mat-header-cell *matHeaderCellDef> even </th>
        <td mat-cell *matCellDef="let even = even"> {{even}} </td>
      </ng-container>

      <!-- Index Column -->
      <ng-container matColumnDef="odd">
        <th mat-header-cell *matHeaderCellDef> odd </th>
        <td mat-cell *matCellDef="let odd = odd"> {{odd}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Table showing each row context properties.
     */
    @Component({
      selector: 'table-row-context-example',
      styleUrls: ['table-row-context-example.css'],
      templateUrl: 'table-row-context-example.html',
    })
    export class TableRowContextExample {
      displayedColumns: string[] = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
      data: string[] = ['one', 'two', 'three', 'four', 'five'];
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
