import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SessionsComponent implements OnInit {
  data: any[];

  constructor() {
    this.data = data;
  }

  ngOnInit() {
  }

}

export let data = [
  {
    'name': 'Direct',
    'value': 1300
  },
  {
    'name': 'Email',
    'value': 500
  },
  {
    'name': 'Referral',
    'value': 1600
  }
];
