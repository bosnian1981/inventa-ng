import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-list-with-sections',
  templateUrl: './list-with-sections.component.html',
  styleUrls: ['./list-with-sections.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListWithSectionsComponent implements OnInit {
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16')
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16')
    },
    {
      name: 'Work',
      updated: new Date('1/28/16')
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16')
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16')
    }
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-list>
      <h3 mat-subheader>Folders</h3>
      <mat-list-item *ngFor="let folder of folders">
        <mat-icon mat-list-icon>folder</mat-icon>
        <div mat-line>{{folder.name}}</div>
        <p mat-line> {{folder.updated | date}} </p>
      </mat-list-item>
      <mat-divider></mat-divider>
      <h3 mat-subheader>Notes</h3>
      <mat-list-item *ngFor="let note of notes">
        <mat-icon mat-list-icon>note</mat-icon>
        <div mat-line>{{note.name}}</div>
        <p mat-line> {{note.updated | date}} </p>
      </mat-list-item>
    </mat-list>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    export interface Section {
      name: string;
      updated: Date;
    }

    /**
     * @title List with sections
     */
    @Component({
      selector: 'list-sections-example',
      styleUrls: ['list-sections-example.css'],
      templateUrl: 'list-sections-example.html',
    })
    export class ListSectionsExample {
      folders: Section[] = [
        {
          name: 'Photos',
          updated: new Date('1/1/16'),
        },
        {
          name: 'Recipes',
          updated: new Date('1/17/16'),
        },
        {
          name: 'Work',
          updated: new Date('1/28/16'),
        }
      ];
      notes: Section[] = [
        {
          name: 'Vacation Itinerary',
          updated: new Date('2/20/16'),
        },
        {
          name: 'Kitchen Remodel',
          updated: new Date('1/18/16'),
        }
      ];
    }

    `;

    this.cssCode = `
    .mat-list-icon {
      color: rgba(0, 0, 0, 0.54);
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
