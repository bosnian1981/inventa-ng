import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';
import { AlertService } from 'shared/services/alert.service';
import { Alert } from 'shared/models/alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AlertsComponent implements OnInit {
  alerts: Alert[];

  constructor(
    private alertService: AlertService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.getAlerts();
  }

  public getAlerts(): void {
    this.alertService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }

  select() {
    this.closeList();
  }
  closeList(): any {
    const el = document.querySelector('#alerts-card');
    this.renderer.setAttribute(el, 'class', 'mda-card d-none');
  }
}
