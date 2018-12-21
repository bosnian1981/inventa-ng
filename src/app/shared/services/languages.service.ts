import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'shared/models/language';

@Injectable()
export class LanguagesService {
  public url = 'api/languages';
  constructor(public http: HttpClient) {}

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.url);
  }
}
