import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from 'shared/models/statistics';

@Injectable()
export class StatisticsService {
  public url = 'api/statistics';
  constructor(public http: HttpClient) {}

  getStatistics(): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(this.url);
  }
}
