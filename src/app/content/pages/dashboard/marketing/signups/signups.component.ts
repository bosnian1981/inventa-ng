import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signups',
  templateUrl: './signups.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SignupsComponent {
  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { data });
  }

  onSelect(event) {
    console.log(event);
  }
}

export let data = [
  {
    'name': 'Jan 28',
    'value': 2435
  },
  {
    'name': 'Feb 5',
    'value': 3118
  },
  {
    'name': 'Feb 12',
    'value': 1832
  },
  {
    'name': 'Feb 19',
    'value': 2559
  },
  {
    'name': 'Feb 26',
    'value': 3883
  }
];


