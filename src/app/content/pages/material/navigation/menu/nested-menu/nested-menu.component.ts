import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NestedMenuComponent implements OnInit {
   // (fullScreen, remove, toggle)
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <button mat-button [matMenuTriggerFor]="animals">Animal index</button>

    <mat-menu #animals="matMenu">
      <button mat-menu-item [matMenuTriggerFor]="vertebrates">Vertebrates</button>
      <button mat-menu-item [matMenuTriggerFor]="invertebrates">Invertebrates</button>
    </mat-menu>

    <mat-menu #vertebrates="matMenu">
      <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
      <button mat-menu-item [matMenuTriggerFor]="amphibians">Amphibians</button>
      <button mat-menu-item [matMenuTriggerFor]="reptiles">Reptiles</button>
      <button mat-menu-item>Birds</button>
      <button mat-menu-item>Mammals</button>
    </mat-menu>

    <mat-menu #invertebrates="matMenu">
      <button mat-menu-item>Insects</button>
      <button mat-menu-item>Molluscs</button>
      <button mat-menu-item>Crustaceans</button>
      <button mat-menu-item>Corals</button>
      <button mat-menu-item>Arachnids</button>
      <button mat-menu-item>Velvet worms</button>
      <button mat-menu-item>Horseshoe crabs</button>
    </mat-menu>

    <mat-menu #fish="matMenu">
      <button mat-menu-item>Baikal oilfish</button>
      <button mat-menu-item>Bala shark</button>
      <button mat-menu-item>Ballan wrasse</button>
      <button mat-menu-item>Bamboo shark</button>
      <button mat-menu-item>Banded killifish</button>
    </mat-menu>

    <mat-menu #amphibians="matMenu">
      <button mat-menu-item>Sonoran desert toad</button>
      <button mat-menu-item>Western toad</button>
      <button mat-menu-item>Arroyo toad</button>
      <button mat-menu-item>Yosemite toad</button>
    </mat-menu>

    <mat-menu #reptiles="matMenu">
      <button mat-menu-item>Banded Day Gecko</button>
      <button mat-menu-item>Banded Gila Monster</button>
      <button mat-menu-item>Black Tree Monitor</button>
      <button mat-menu-item>Blue Spiny Lizard</button>
      <button mat-menu-item disabled>Velociraptor</button>
    </mat-menu>
    `;

    this.tsCode = `
    import {Component} from '@angular/core';

    /**
     * @title Nested menu
     */
    @Component({
      selector: 'nested-menu-example',
      templateUrl: 'nested-menu-example.html',
      styleUrls: ['nested-menu-example.css'],
    })
    export class NestedMenuExample {}
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
