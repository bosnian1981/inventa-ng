import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Language } from 'shared/models/language';
import { LanguagesService } from 'shared/services/languages.service';
import { ComponentCommunicationService } from 'shared/services/component-communication.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LanguagesComponent implements OnInit {
  showNavLanguages = false;
  languages: Language[];
  selectedLanguage: Language;

  constructor(
    private languageService: LanguagesService,
    private componentCommunicationService: ComponentCommunicationService
  ) {}

  ngOnInit() {
    this.getLanguages();
  }

  public getLanguages(): void {
    this.languageService.getLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

  changeLanguage(language: Language) {
    this.selectedLanguage = language;
    this.componentCommunicationService.sendMessage(this.selectedLanguage.id.toString());
  }

  toggleNavLanguages() {
    this.showNavLanguages = !this.showNavLanguages;
  }

  closeLanguages(e: Event) {
    this.showNavLanguages = false;
  }
}
