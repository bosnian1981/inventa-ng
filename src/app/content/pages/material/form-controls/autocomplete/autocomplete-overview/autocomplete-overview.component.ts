import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  flag: string;
  name: string;
  population: string;
}

@Component({
  selector: 'app-autocomplete-overview',
  templateUrl: './autocomplete-overview.component.html',
  styleUrls: ['./autocomplete-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteOverviewComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.states.slice()))
    );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(
      state => state.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  ngOnInit() {
    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
            <img class="example-option-img" aria-hidden [src]="state.flag" height="25">
            <span>{{state.name}}</span> |
            <small>Population: {{state.population}}</small>
          </mat-option>
        </mat-autocomplete>
      </mat-form-field>

      <br>

      <mat-slide-toggle
        [checked]="stateCtrl.disabled"
        (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
        Disable Input?
      </mat-slide-toggle>
      </form>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {map, startWith} from 'rxjs/operators';

    export interface State {
      flag: string;
      name: string;
      population: string;
    }

    /**
     * @title Autocomplete overview
     */
    @Component({
      selector: 'autocomplete-overview-example',
      templateUrl: 'autocomplete-overview-example.html',
      styleUrls: ['autocomplete-overview-example.css'],
    })
    export class AutocompleteOverviewExample {
      stateCtrl = new FormControl();
      filteredStates: Observable<State[]>;

      states: State[] = [
        {
          name: 'Arkansas',
          population: '2.978M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
        },
        {
          name: 'California',
          population: '39.14M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
        },
        {
          name: 'Florida',
          population: '20.27M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
        },
        {
          name: 'Texas',
          population: '27.47M',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
          flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
        }
      ];

      constructor() {
        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(state => state ? this._filterStates(state) : this.states.slice())
          );
      }

      private _filterStates(value: string): State[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
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
    .example-option-img {
      vertical-align: middle;
      margin-right: 8px;
    }
    [dir='rtl'] .example-option-img {
      margin-right: 0;
      margin-left: 8px;
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
