import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-table-retreaving-data-by-http',
  templateUrl: './table-retreaving-data-by-http.component.html',
  styleUrls: ['./table-retreaving-data-by-http.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableRetreavingDataByHttpComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private http: HttpClient
    ) {}

  ngOnInit() {

    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          // tslint:disable-next-line:no-non-null-assertion
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);

    this.htmlCode = `
    <div class="example-container mat-elevation-z8">
      <div class="example-loading-shade"
          *ngIf="isLoadingResults || isRateLimitReached">
        <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
        <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
          GitHub's API rate limit has been reached. It will be reset in one minute.
        </div>
      </div>

      <div class="example-table-container">

        <table mat-table [dataSource]="data" class="example-table"
              matSort matSortActive="created" matSortDisableClear matSortDirection="asc">
          <!-- Number Column -->
          <ng-container matColumnDef="number">
            <th mat-header-cell *matHeaderCellDef>#</th>
            <td mat-cell *matCellDef="let row">{{row.number}}</td>
          </ng-container>

          <!-- Title Column -->
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef>Title</th>
            <td mat-cell *matCellDef="let row">{{row.title}}</td>
          </ng-container>

          <!-- State Column -->
          <ng-container matColumnDef="state">
            <th mat-header-cell *matHeaderCellDef>State</th>
            <td mat-cell *matCellDef="let row">{{row.state}}</td>
          </ng-container>

          <!-- Created Column -->
          <ng-container matColumnDef="created">
            <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>
              Created
            </th>
            <td mat-cell *matCellDef="let row">{{row.created_at | date}}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </div>

      <mat-paginator [length]="resultsLength" [pageSize]="30"></mat-paginator>
    </div>
    `;

    this.tsCode = `
    import {HttpClient} from '@angular/common/http';
    import {Component, OnInit, ViewChild} from '@angular/core';
    import {MatPaginator, MatSort} from '@angular/material';
    import {merge, Observable, of as observableOf} from 'rxjs';
    import {catchError, map, startWith, switchMap} from 'rxjs/operators';

    /**
     * @title Table retrieving data through HTTP
     */
    @Component({
      selector: 'table-http-example',
      styleUrls: ['table-http-example.css'],
      templateUrl: 'table-http-example.html',
    })
    export class TableHttpExample implements OnInit {
      displayedColumns: string[] = ['created', 'state', 'number', 'title'];
      exampleDatabase: ExampleHttpDao | null;
      data: GithubIssue[] = [];

      resultsLength = 0;
      isLoadingResults = true;
      isRateLimitReached = false;

      @ViewChild(MatPaginator) paginator: MatPaginator;
      @ViewChild(MatSort) sort: MatSort;

      constructor(private http: HttpClient) {}

      ngOnInit() {
        this.exampleDatabase = new ExampleHttpDao(this.http);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
          .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoadingResults = true;
              return this.exampleDatabase!.getRepoIssues(
                this.sort.active, this.sort.direction, this.paginator.pageIndex);
            }),
            map(data => {
              // Flip flag to show that loading has finished.
              this.isLoadingResults = false;
              this.isRateLimitReached = false;
              this.resultsLength = data.total_count;

              return data.items;
            }),
            catchError(() => {
              this.isLoadingResults = false;
              // Catch if the GitHub API has reached its rate limit. Return empty data.
              this.isRateLimitReached = true;
              return observableOf([]);
            })
          ).subscribe(data => this.data = data);
      }
    }

    export interface GithubApi {
      items: GithubIssue[];
      total_count: number;
    }

    export interface GithubIssue {
      created_at: string;
      number: string;
      state: string;
      title: string;
    }

    /** An example database that the data source uses to retrieve data for the table. */
    export class ExampleHttpDao {
      constructor(private http: HttpClient) {}

      getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =...
        return this.http.get<GithubApi>(requestUrl);
      }
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

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(requestUrl);
  }
}
