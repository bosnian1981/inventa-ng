import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  encapsulation: ViewEncapsulation.None
})
export class GroupedBarChartComponent implements OnInit {
  chart: any = [];
  constructor() {}

  ngOnInit() {
    this.getChartData();
  }

  getChartData() {
    this.chart = new Chart('bar-chart-grouped', {
      type: 'bar',
      data: {
        labels: ['1900', '1950', '1999', '2050'],
        datasets: [
          {
            label: 'Africa',
            backgroundColor: '#3e95cd',
            data: [133, 221, 783, 2478]
          },
          {
            label: 'Europe',
            backgroundColor: '#8e5ea2',
            data: [408, 547, 675, 734]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Population growth (millions)'
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
