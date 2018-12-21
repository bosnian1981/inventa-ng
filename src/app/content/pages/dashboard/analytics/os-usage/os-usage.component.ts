import { Component, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-os-usage',
  templateUrl: './os-usage.component.html',
  encapsulation: ViewEncapsulation.None
})
export class OsUsageComponent {
  data: any[];
  elemWidth: any;
  message: any;
  subscription: Subscription;

  view: any[];
  // options
  showLegend = false;

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = false;
  gradient = true;

  public colorScheme = {
    domain: ['#0080ff', '#ff00bf', '#8000ff', '#00ff00', '#dc3545', '#ffff00']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, {data});
  }

  onSelect(event) {
    console.log(event);
  }
}

export let data = [
  {
    'name': 'Windows',
    'value': 37.38
  },
  {
    'name': 'Android',
    'value': 37.28
  },
  {
    'name': 'iOS',
    'value': 13.62
  },
  {
    'name': 'OSX',
    'value': 6.54
  },
  {
    'name': 'Unknown',
    'value': 2.81
  },
  {
    'name': 'Linux',
    'value': 0.81
  }
];
