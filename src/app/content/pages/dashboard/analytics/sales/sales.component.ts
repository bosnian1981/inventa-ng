import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SalesComponent implements OnInit {
  PieChart: any = [];
  data = [];
  title: string;

  ngOnInit() {
    this.data = [135, 90, 120, 150];
    this.title = '2018';
    this.loadData();
  }

  loadData() {
     // pie chart:
     this.PieChart = new Chart('pieChart', {
      type: 'line',
      data: {
        labels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
        datasets: [
          {
            label: '',
            data: this.data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(191,141,18, 0.4)',
              'rgba(153, 102, 255, 0.4)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.8
          }
        ]
      },
      options: {
        title: {
          text: this.title,
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  getData(year) {
    if (year === 2016) {
      this.data = [90, 145, 185, 72];
      this.title = '2016';
    } else if (year === 2017) {
      this.data = [110, 88, 170, 110];
      this.title = '2017';
    } else {
      this.data = [135, 90, 120, 150];
      this.title = '2018';
    }

    this.loadData();
  }
}
