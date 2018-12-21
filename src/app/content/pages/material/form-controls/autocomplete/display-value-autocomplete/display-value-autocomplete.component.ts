import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-display-value-autocomplete',
  templateUrl: './display-value-autocomplete.component.html',
  styleUrls: ['./display-value-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayValueAutocompleteComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input type="text" placeholder="Assignee" aria-label="Assignee" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
            {{option.name}}
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component, OnInit} from '@angular/core';
    import {FormControl} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';

    export interface User {
      name: string;
    }

    /**
     * @title Display value autocomplete
     */
    @Component({
      selector: 'autocomplete-display-example',
      templateUrl: 'autocomplete-display-example.html',
      styleUrls: ['autocomplete-display-example.css'],
    })
    export class AutocompleteDisplayExample implements OnInit {
      myControl = new FormControl();
      options: User[] = [
        {name: 'Mary'},
        {name: 'Shelley'},
        {name: 'Igor'}
      ];
      filteredOptions: Observable<User[]>;

      ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.options.slice())
          );
      }

      displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
      }

      private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
      }
    }
    `;

    this.cssCode = `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    .example-full-width {
      width: 100%;
    }
    `;
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
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
