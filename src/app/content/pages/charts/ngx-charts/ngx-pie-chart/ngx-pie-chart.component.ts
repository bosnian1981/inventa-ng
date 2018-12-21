import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ngx-pie-chart',
  templateUrl: './ngx-pie-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NgxPieChartComponent {
  single: any[];
  multi: any[];

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, { single, multi });
  }

  onSelect(event) {
    console.log(event);
  }
}

export let single = [
  {
    name: 'Germany',
    value: 8940000
  },
  {
    name: 'USA',
    value: 5000000
  },
  {
    name: 'France',
    value: 7200000
  }
];

export let multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 7300000
      },
      {
        name: '2011',
        value: 8940000
      }
    ]
  },

  {
    name: 'USA',
    series: [
      {
        name: '2010',
        value: 7870000
      },
      {
        name: '2011',
        value: 8270000
      }
    ]
  },

  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 5000002
      },
      {
        name: '2011',
        value: 5800000
      }
    ]
  }
];
