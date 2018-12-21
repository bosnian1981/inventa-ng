import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService,
    private _formBuilder: FormBuilder
    ) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.htmlCode = `
    <button mat-raised-button (click)="isLinear = !isLinear" id="toggle-linear">
      {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}
    </button>
    <mat-horizontal-stepper [linear]="isLinear" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <form [formGroup]="firstFormGroup">
          <ng-template matStepLabel>Fill out your name</ng-template>
          <mat-form-field>
            <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <form [formGroup]="secondFormGroup">
          <ng-template matStepLabel>Fill out your address</ng-template>
          <mat-form-field>
            <input matInput placeholder="Address" formControlName="secondCtrl" required>
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>
      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        You are now done.
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>
    `;

    this.tsCode = `
    import {Component, OnInit} from '@angular/core';
    import {FormBuilder, FormGroup, Validators} from '@angular/forms';

    /**
     * @title Stepper overview
     */
    @Component({
      selector: 'stepper-overview-example',
      templateUrl: 'stepper-overview-example.html',
      styleUrls: ['stepper-overview-example.css'],
    })
    export class StepperOverviewExample implements OnInit {
      isLinear = false;
      firstFormGroup: FormGroup;
      secondFormGroup: FormGroup;

      constructor(private _formBuilder: FormBuilder) {}

      ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
          firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
          secondCtrl: ['', Validators.required]
        });
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
