import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  encapsulation: ViewEncapsulation.None
})
export class VisitorsComponent implements OnInit {
  chart: any = [];
  data1 = [];
  data2 = [];
  title: string;

  constructor() {}

  ngOnInit() {
    this.data1 = [
      16545,
      11454,
      10685,
      10628,
      10745,
      11158,
      13392,
      22158,
      28356,
      24782,
      18966,
      23458
    ];
    this.data2 = [
      28254,
      35069,
      31152,
      20259,
      33545,
      30958,
      24725,
      24021,
      27005,
      22675,
      35215,
      26987
    ];
    this.title = '2018';
    this.getChartData();
  }

  getChartData() {
    this.chart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEP',
          'OCT',
          'NOV',
          'DEC'
        ],
        datasets: [
          {
            data: this.getRandomData(1),
            label: 'New Visitors',
            borderColor: 'rgba(25, 25, 25, 0.9)',
            fill: true,
            backgroundColor: 'rgba(25, 25, 25, 0.3)'
          },
          {
            data: this.getRandomData(2),
            label: 'Returning Visitors',
            borderColor: 'rgba(225, 225, 225, 0.9)',
            fill: true,
            backgroundColor: 'rgba(225, 225, 225, 0.3)'
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: this.title,
          fontColor: '#fff',
          fontSize: 15
        },
        legend: {
          labels: {
            fontColor: '#fff',
            fontSize: 12
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontColor: '#fff',
                fontSize: 11
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#fff',
                fontSize: 11
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  getData(year) {
    if (year === 2016) {
      this.data1 = this.getRandomData(1);
      this.data2 = this.getRandomData(2);
      this.title = '2016';
    } else if (year === 2017) {
      this.data1 = this.getRandomData(1);
      this.data2 = this.getRandomData(2);
      this.title = '2017';
    } else {
      this.data1 = this.getRandomData(1);
      this.data2 = this.getRandomData(2);
      this.title = '2018';
    }

    this.getChartData();
  }

  getRandomData(type: number) {
    const arr = [];
    let min, max: number;
    if (type === 1) {
      min = 10000;
      max = 12000;
    } else {
      min = 11000;
      max = 14000;
    }
    for (let index = 0; index < 12; index++) {
      arr.push(this.randomIntFromInterval(min, max));
    }
    return arr;
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
