import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  private messagesList = [
    {
      name: 'Richard Miles',
      message: 'Hi, Lorem ipsum dolor sit amet consectetur ... ',
      time: '16:45',
      image: 'male/user1.jpg'
    },
    {
      name: 'Melissa Dwayne',
      message: 'Hey, I have done lorem ipsum dolor sit amet ... ',
      time: '15:22',
      image: 'female/user8.jpg'
    },
    {
      name: 'Layla Cloe',
      message: 'Lorem ipsum dolor sit amet, adipisicing ... ',
      time: '12:56',
      image: 'female/user3.jpg'
    },
    {
      name: 'Ashok Kumar',
      message: 'Lorem ipsum dolor sit amet consectetur do ... ',
      time: 'Yesterday',
      image: 'male/user2.jpg'
    },
    {
      name: '2 days ago',
      message: 'Hi, Lorem ipsum dolor sit amet consectetur ... ',
      time: '16:45',
      image: 'male/user3.jpg'
    }
  ];

  getMessagesList() {
    return this.messagesList;
  }
}
