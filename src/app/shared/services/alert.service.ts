import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert } from 'shared/models/alert';

@Injectable()
export class AlertService {
  public url = 'api/alerts';
  constructor(public http: HttpClient) {}

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.url);
  }
}
