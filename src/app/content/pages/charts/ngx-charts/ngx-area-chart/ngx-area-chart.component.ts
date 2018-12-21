import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ngx-area-chart',
  templateUrl: './ngx-area-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NgxAreaChartComponent {
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

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
