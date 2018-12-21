import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter-autocomplete',
  templateUrl: './filter-autocomplete.component.html',
  styleUrls: ['./filter-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterAutocompleteComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    this.htmlCode = `
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete">
          <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
            {{option}}
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

    /**
     * @title Filter autocomplete
     */
    @Component({
      selector: 'autocomplete-filter-example',
      templateUrl: 'autocomplete-filter-example.html',
      styleUrls: ['autocomplete-filter-example.css'],
    })
    export class AutocompleteFilterExample implements OnInit {
      myControl = new FormControl();
      options: string[] = ['One', 'Two', 'Three'];
      filteredOptions: Observable<string[]>;

      ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      }

      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
