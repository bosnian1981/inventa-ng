import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl, Validators } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-select-with-form-field-feature',
  templateUrl: './select-with-form-field-feature.component.html',
  styleUrls: ['./select-with-form-field-feature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWithFormFieldFeatureComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  animalControl = new FormControl('', [Validators.required]);
      animals: Animal[] = [
        {name: 'Dog', sound: 'Woof!'},
        {name: 'Cat', sound: 'Meow!'},
        {name: 'Cow', sound: 'Moo!'},
        {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
      ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
        <mat-option>--</mat-option>
        <mat-option *ngFor="let animal of animals" [value]="animal">
          {{animal.name}}
        </mat-option>
      </mat-select>
      <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
      <mat-hint>{{animalControl.value?.sound}}</mat-hint>
    </mat-form-field>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl, Validators} from '@angular/forms';

    export interface Animal {
      name: string;
      sound: string;
    }

    /** @title Select with form field features */
    @Component({
      selector: 'select-hint-error-example',
      templateUrl: 'select-hint-error-example.html',
      styleUrls: ['select-hint-error-example.css'],
    })
    export class SelectHintErrorExample {
      animalControl = new FormControl('', [Validators.required]);
      animals: Animal[] = [
        {name: 'Dog', sound: 'Woof!'},
        {name: 'Cat', sound: 'Meow!'},
        {name: 'Cow', sound: 'Moo!'},
        {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
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
