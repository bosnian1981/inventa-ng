import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

export interface Pokemon {
  value: string;
  viewValue: string;
}

export interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

@Component({
  selector: 'app-select-with-option-groups',
  templateUrl: './select-with-option-groups.component.html',
  styleUrls: ['./select-with-option-groups.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectWithOptionGroupsComponent implements OnInit {
  
  htmlCode: string;
  tsCode: string;
  cssCode: string;

  pokemonControl = new FormControl();
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
        {value: 'oddish-1', viewValue: 'Oddish'},
        {value: 'bellsprout-2', viewValue: 'Bellsprout'}
      ]
    },
    {
      name: 'Water',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Squirtle'},
        {value: 'psyduck-4', viewValue: 'Psyduck'},
        {value: 'horsea-5', viewValue: 'Horsea'}
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        {value: 'charmander-6', viewValue: 'Charmander'},
        {value: 'vulpix-7', viewValue: 'Vulpix'},
        {value: 'flareon-8', viewValue: 'Flareon'}
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        {value: 'mew-9', viewValue: 'Mew'},
        {value: 'mewtwo-10', viewValue: 'Mewtwo'},
      ]
    }
  ];

  constructor(
    private _clipboardService: ClipboardService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.htmlCode = `
    <mat-form-field>
      <mat-select placeholder="Pokemon" [formControl]="pokemonControl">
        <mat-option>-- None --</mat-option>
        <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
                      [disabled]="group.disabled">
          <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
            {{pokemon.viewValue}}
          </mat-option>
        </mat-optgroup>
      </mat-select>
    </mat-form-field>

    `;

    this.tsCode = `
    import {Component} from '@angular/core';
    import {FormControl} from '@angular/forms';

    export interface Pokemon {
      value: string;
      viewValue: string;
    }

    export interface PokemonGroup {
      disabled?: boolean;
      name: string;
      pokemon: Pokemon[];
    }

    /** @title Select with option groups */
    @Component({
      selector: 'select-optgroup-example',
      templateUrl: 'select-optgroup-example.html',
      styleUrls: ['select-optgroup-example.css'],
    })
    export class SelectOptgroupExample {
      pokemonControl = new FormControl();
      pokemonGroups: PokemonGroup[] = [
        {
          name: 'Grass',
          pokemon: [
            {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
            {value: 'oddish-1', viewValue: 'Oddish'},
            {value: 'bellsprout-2', viewValue: 'Bellsprout'}
          ]
        },
        {
          name: 'Water',
          pokemon: [
            {value: 'squirtle-3', viewValue: 'Squirtle'},
            {value: 'psyduck-4', viewValue: 'Psyduck'},
            {value: 'horsea-5', viewValue: 'Horsea'}
          ]
        },
        {
          name: 'Fire',
          disabled: true,
          pokemon: [
            {value: 'charmander-6', viewValue: 'Charmander'},
            {value: 'vulpix-7', viewValue: 'Vulpix'},
            {value: 'flareon-8', viewValue: 'Flareon'}
          ]
        },
        {
          name: 'Psychic',
          pokemon: [
            {value: 'mew-9', viewValue: 'Mew'},
            {value: 'mewtwo-10', viewValue: 'Mewtwo'},
          ]
        }
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
