import { Injectable } from '@angular/core';

@Injectable()
export class TicketService {
  private ticketsList = [
    {
      name: 'Melissa Dwayne',
      desc:
        // tslint:disable-next-line:max-line-length
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
      time: 'Yesterday',
      status: 'pending',
      image: 'female/user8.jpg'
    },
    {
      name: 'Ashok Kumar',
      desc:
        // tslint:disable-next-line:max-line-length
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
      time: 'Yesterday',
      status: 'closed',
      image: 'male/user2.jpg'
    },
    {
      name: 'Layla Cloe',
      desc:
        // tslint:disable-next-line:max-line-length
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
      time: '2 days ago',
      status: 'open',
      image: 'female/user3.jpg'
    }
  ];

  getTicketsList() {
    return this.ticketsList;
  }
}
