import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { ThemePalette } from '@angular/material';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-stacked-chips',
  templateUrl: './stacked-chips.component.html',
  styleUrls: ['./stacked-chips.component.scss']
})
export class StackedChipsComponent implements OnInit {
   // (fullScreen, remove, toggle)

  htmlCode: string;
  tsCode: string;
  cssCode: string;

  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-chip-list>
      <mat-chip>One fish</mat-chip>
      <mat-chip>Two fish</mat-chip>
      <mat-chip color="primary" selected>Primary fish</mat-chip>
      <mat-chip color="accent" selected>Accent fish</mat-chip>
    </mat-chip-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {ThemePalette} from '@angular/material/core';

    export interface ChipColor {
      name: string;
      color: ThemePalette;
    }

    /**
     * @title Stacked chips
     */
    @Component({
      selector: 'chips-stacked-example',
      templateUrl: 'chips-stacked-example.html',
      styleUrls: ['chips-stacked-example.css'],
    })
    export class ChipsStackedExample {
      availableColors: ChipColor[] = [
        {name: 'none', color: undefined},
        {name: 'Primary', color: 'primary'},
        {name: 'Accent', color: 'accent'},
        {name: 'Warn', color: 'warn'}
      ];
    }
    `;

    this.cssCode = `
    mat-chip {
      max-width: 200px;
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
