import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-option-groups-autocomplete',
  templateUrl: './option-groups-autocomplete.component.html',
  styleUrls: ['./option-groups-autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OptionGroupsAutocompleteComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );

    this.htmlCode = `
    <form [formGroup]="stateForm">
      <mat-form-field>
        <input type="text" matInput placeholder="States Group" formControlName="stateGroup" required [matAutocomplete]="autoGroup">
          <mat-autocomplete #autoGroup="matAutocomplete">
            <mat-optgroup *ngFor="let group of stateGroupOptions | async" [label]="group.letter">
              <mat-option *ngFor="let name of group.names" [value]="name">
                {{name}}
              </mat-option>
          </mat-optgroup>
        </mat-autocomplete>
      </mat-form-field>
    </form>
    `;

    this.tsCode = `
    import {Component, OnInit} from '@angular/core';
    import {FormBuilder, FormGroup} from '@angular/forms';
    import {Observable} from 'rxjs';
    import {startWith, map} from 'rxjs/operators';

    export interface StateGroup {
      letter: string;
      names: string[];
    }

    export const _filter = (opt: string[], value: string): string[] => {
      const filterValue = value.toLowerCase();

      return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
    };

    /**
     * @title Option groups autocomplete
     */
    @Component({
      templateUrl: './autocomplete-optgroup-example.html',
      styleUrls: ['./autocomplete-optgroup-example.css'],
    })

    export class AutocompleteOptgroupExample implements OnInit {
      stateForm: FormGroup = this.fb.group({
        stateGroup: '',
      });

      stateGroups: StateGroup[] = [{
        letter: 'A',
        names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
      }, {
        letter: 'C',
        names: ['California', 'Colorado', 'Connecticut']
      }, {
        letter: 'D',
        names: ['Delaware']
      }, {
        letter: 'F',
        names: ['Florida']
      }, {
        letter: 'G',
        names: ['Georgia']
      }, {
        letter: 'H',
        names: ['Hawaii']
      }, {
        letter: 'I',
        names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
      }, {
        letter: 'K',
        names: ['Kansas', 'Kentucky']
      }, {
        letter: 'L',
        names: ['Louisiana']
      }, {
        letter: 'M',
        names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
          'Minnesota', 'Mississippi', 'Missouri', 'Montana']
      }, {
        letter: 'N',
        names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
          'New Mexico', 'New York', 'North Carolina', 'North Dakota']
      }, {
        letter: 'O',
        names: ['Ohio', 'Oklahoma', 'Oregon']
      }, {
        letter: 'P',
        names: ['Pennsylvania']
      }, {
        letter: 'R',
        names: ['Rhode Island']
      }, {
        letter: 'S',
        names: ['South Carolina', 'South Dakota']
      }, {
        letter: 'T',
        names: ['Tennessee', 'Texas']
      }, {
        letter: 'U',
        names: ['Utah']
      }, {
        letter: 'V',
        names: ['Vermont', 'Virginia']
      }, {
        letter: 'W',
        names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
      }];

      stateGroupOptions: Observable<StateGroup[]>;

      constructor(private fb: FormBuilder) {}

      ngOnInit() {
        this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filterGroup(value))
          );
      }

      private _filterGroup(value: string): StateGroup[] {
        if (value) {
          return this.stateGroups
            .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
            .filter(group => group.names.length > 0);
        }

        return this.stateGroups;
      }
    }
    `;

    this.cssCode = `
    /** No CSS for this example */
    `;
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
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
