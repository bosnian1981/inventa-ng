import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RevenueComponent {
  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = true;
  yAxisLabel = 'USD $';
  colorScheme = {
    domain: ['#C7B42C', '#A10A28', '#AAAAAA']
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
    'name': 'users',
    'series': [
      {
        'name': 'Jan 28',
        'value': 135
      },
      {
        'name': 'Feb 5',
        'value': 218
      },
      {
        'name': 'Feb 12',
        'value': 132
      },
      {
        'name': 'Feb 19',
        'value': 259
      },
      {
        'name': 'Feb 26',
        'value': 383
      }
    ]
  }
];
