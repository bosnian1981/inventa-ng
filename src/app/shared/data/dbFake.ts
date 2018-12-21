import { Statistics } from './../models/statistics';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from 'shared/models/user';
import { Conversation, ChatMessage } from 'shared/models/conversation';
import { Alert } from 'shared/models/alert';
import { Language } from 'shared/models/language';

export class DbFake implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        username: 'robbins',
        password: 'password',
        isDeleted: false,
        image: 'user_2',
        birthday: { day: 21, month: 12, year: 1979 },
        name: 'Katie',
        surname: 'Patton',
        gender: 'female',
        company: 'BULLZONE',
        email: 'katiepatton@bullzone.com',
        phone: '+1 (928) 484-2264',
        address: '349 Joval Court, Rivereno, Vermont, 6030"',
        status: 'busy',
        newMessages: 2
      },
      {
        id: 2,
        username: 'roberson',
        password: 'password',
        isDeleted: true,
        image: 'user_1',
        birthday: { day: 12, month: 8, year: 1982 },
        name: 'Mike',
        surname: 'Ayala',
        gender: 'male',
        company: 'COSMETEX',
        email: 'pooleayala@cosmetex.com',
        phone: '+1 (852) 592-2578',
        address: '228 Moore Place, 8815"',
        status: 'busy',
        newMessages: 0
      },
      {
        id: 3,
        username: 'harvey',
        password: 'password',
        isDeleted: false,
        image: 'user_3',
        birthday: { day: 26, month: 1, year: 1981 },
        name: 'Murray',
        surname: 'Conway',
        gender: 'male',
        company: 'KAGGLE',
        email: 'murrayconway@kaggle.com',
        phone: '+1 (950) 516-3290',
        address: '687 Newkirk Avenue, Calpine, Mississippi, 825"',
        status: 'online',
        newMessages: 1
      },
      {
        id: 4,
        username: 'strong',
        password: 'password',
        isDeleted: true,
        image: 'user_4',
        birthday: { day: 1, month: 1, year: 1989 },
        name: 'Sonia',
        surname: 'Kaufman',
        gender: 'female',
        company: 'OCEANICA',
        email: 'soniakaufman@oceanica.com',
        phone: '+1 (936) 550-3226',
        address: '509 Bokee Court, Brandywine, Pennsylvania, 6099"',
        status: 'offline',
        newMessages: 0
      },
      {
        id: 5,
        username: 'finley',
        password: 'password',
        isDeleted: true,
        image: 'user_5',
        birthday: { day: 12, month: 8, year: 1986 },
        name: 'Harry',
        surname: 'McDonald',
        gender: 'male',
        company: 'GOLOGY',
        email: 'justicemcdonald@gology.com',
        phone: '+1 (958) 548-2848',
        address: '992 Borinquen Pl, Efland, Arizona, 7180"',
        status: 'offline',
        newMessages: 0
      },
      {
        id: 6,
        username: 'manning',
        password: 'password',
        isDeleted: false,
        image: 'user_6',
        birthday: { day: 22, month: 11, year: 1976 },
        name: 'Antony',
        surname: 'Thornton',
        gender: 'male',
        company: 'UNIA',
        email: 'hopkinsthornton@unia.com',
        phone: '+1 (954) 471-2223',
        address: '315 Underhill Avenue, Neibert, Palau, 2751"',
        status: 'busy',
        newMessages: 3
      },
      {
        id: 7,
        username: 'rocha',
        password: 'password',
        isDeleted: false,
        image: 'user_8',
        birthday: { day: 28, month: 1, year: 1993 },
        name: 'Diaz',
        surname: 'Wheeler',
        gender: 'male',
        company: 'ZORROMOP',
        email: 'diazwheeler@zorromop.com',
        phone: '+1 (876) 574-2993',
        address: '987 Revere Place, Chelsea, California, 3631"',
        status: 'online',
        newMessages: 0
      },
      {
        id: 8,
        username: 'gilmore',
        password: 'password',
        isDeleted: false,
        image: 'user_7',
        birthday: { day: 21, month: 10, year: 1985 },
        name: 'Adriana',
        surname: 'Mclean',
        gender: 'female',
        company: 'BOILCAT',
        email: 'melbamclean@boilcat.com',
        phone: '+1 (944) 589-2021',
        address: '904 Tapscott Street, Ogema, Marshall Islands, 2151"',
        status: 'offline',
        newMessages: 0
      },
      {
        id: 9,
        username: 'mckinney',
        password: 'password',
        isDeleted: false,
        image: 'user_9',
        birthday: { day: 5, month: 6, year: 1989 },
        name: 'Adam',
        surname: 'Parsons',
        gender: 'male',
        company: 'ZILLACTIC',
        email: 'floresparsons@zillactic.com',
        phone: '+1 (818) 427-2381',
        address: '864 Chauncey Street, Dunbar, New York, 8267"',
        status: 'busy',
        newMessages: 0
      },
      {
        id: 10,
        username: 'hogan',
        password: 'password',
        isDeleted: false,
        image: 'user_10',
        birthday: { day: 22, month: 2, year: 1979 },
        name: 'Kristy',
        surname: 'Lee',
        gender: 'female',
        company: 'KIOSK',
        email: 'kristyle@kiosk.com',
        phone: '+1 (899) 417-2931',
        address: '236 Boerum Place, Golconda, Indiana, 1931"',
        status: 'online',
        newMessages: 0
      },
      {
        id: 11,
        username: 'graves',
        password: 'password',
        isDeleted: false,
        image: 'user_12',
        birthday: { day: 1, month: 10, year: 1975 },
        name: 'Donald',
        surname: 'Blankenship',
        gender: 'male',
        company: 'HOPELI',
        email: 'haneyblankenship@hopeli.com',
        phone: '+1 (840) 415-2640',
        address: '734 Foster Avenue, Gambrills, Alaska, 6977"',
        status: 'busy',
        newMessages: 0
      },
      {
        id: 12,
        username: 'foley',
        password: 'password',
        isDeleted: true,
        image: 'user_13',
        birthday: { day: 12, month: 1, year: 1992 },
        name: 'Alfred',
        surname: 'Jordan',
        gender: 'male',
        company: 'OCEANICA',
        email: 'fitzgeraldjordan@oceanica.com',
        phone: '+1 (880) 499-3669',
        address: '578 Cropsey Avenue, Maury, Northern Mariana Islands, 1382',
        status: 'offline',
        newMessages: 0
      },
      {
        id: 13,
        username: 'ruiz',
        password: 'password',
        isDeleted: false,
        image: 'user_14',
        birthday: { day: 22, month: 11, year: 1983 },
        name: 'Richard',
        surname: 'Salazar',
        gender: 'male',
        company: 'LOTRON',
        email: 'richardssalazar@lotron.com',
        phone: '+1 (995) 522-3102',
        address: '600 Hendrix Street, Watchtower, California, 5486',
        status: 'online',
        newMessages: 2
      },
      {
        id: 14,
        username: 'sykes',
        password: 'password',
        isDeleted: true,
        image: 'user_11',
        birthday: { day: 13, month: 5, year: 1991 },
        name: 'Diana',
        surname: 'Garrison',
        gender: 'female',
        company: 'MARTGO',
        email: 'deenagarrison@martgo.com',
        phone: '+1 (847) 543-2812',
        address: '105 Bayard Street, Deercroft, Arizona, 234',
        status: 'online',
        newMessages: 0
      }
    ];

    const conversations: Conversation[] = [
      {
        id: 1,
        user1: 1,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 1,
            message: 'Hello Katie! How are you doing?',
            time: 'Today at 10:45 AM'
          },
          {
            id: 2,
            sender: 1,
            receiver: 2,
            message: 'Hey! I am fine. Thanks for asking!',
            time: 'Today at 10:46 AM'
          },
          {
            id: 3,
            sender: 2,
            receiver: 1,
            message: 'I have seen your new project',
            time: 'Today at 10:48 AM'
          },
          {
            id: 4,
            sender: 2,
            receiver: 1,
            message: 'Looks amazing',
            time: 'Today at 10:48 AM'
          },
          {
            id: 5,
            sender: 1,
            receiver: 2,
            message: 'Thanks, I am glad to hear that',
            time: 'Today at 10:51 AM'
          },
        ]
      },
      {
        id: 2,
        user1: 3,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 3,
            message: 'Hey Murray, can I ask for help?',
            time: 'Today at 9:42 AM'
          }
        ]
      },
      {
        id: 3,
        user1: 4,
        user2: 2,
        messages:  ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 4,
            message: 'Hello Sonia! How are you today?',
            time: 'Today at 10:48 AM'
          },
          {
            id: 2,
            sender: 4,
            receiver: 2,
            message: 'Great, thanks, and you?',
            time: 'Today at 10:53 AM'
          }
        ]
      },
      {
        id: 4,
        user1: 5,
        user2: 2,
        messages:  ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 5,
            message: 'Hey Harry! Still have a problem with your project?',
            time: 'Today at 10:45 AM'
          },
          {
            id: 2,
            sender: 5,
            receiver: 2,
            message: 'Hey! Actually I solved it yesterday. I am available to help you with your project now',
            time: 'Today at 10:46 AM'
          }
        ]
      },
      {
        id: 5,
        user1: 6,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 6,
            message: 'Hey Antony! Good to see you in office again',
            time: 'Today at 10:45 AM'
          },
          {
            id: 2,
            sender: 2,
            receiver: 6,
            message: 'How do you feel now?',
            time: 'Today at 10:46 AM'
          },
          {
            id: 3,
            sender: 6,
            receiver: 2,
            message: 'Hey, feel much better man. How about you?',
            time: 'Today at 10:48 AM'
          }
        ]
      },
      {
        id: 6,
        user1: 7,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 7,
            message: 'Hello Diaz! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 7,
        user1: 8,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 8,
            message: 'Hello Adriana! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 8,
        user1: 9,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 9,
            message: 'Hello Adam! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 9,
        user1: 10,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 10,
            message: 'Hello Kristy! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 10,
        user1: 11,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 11,
            message: 'Hello Donald! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 11,
        user1: 12,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 12,
            message: 'Hello Alfred! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 12,
        user1: 13,
        user2: 2,
        messages: [
          {
            id: 1,
            sender: 2,
            receiver: 13,
            message: 'Hello Richard! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
      {
        id: 13,
        user1: 14,
        user2: 2,
        messages: ChatMessage[''] = [
          {
            id: 1,
            sender: 2,
            receiver: 14,
            message: 'Hello Diana! How are you doing?',
            time: 'Today at 10:45 AM'
          }
        ]
      },
    ];

    const alerts: Alert[] = [
      {
        id: 1,
        name: '8 new messages',
        icon: 'fa fa-envelope',
        time: 'Today at 10:45 AM'
      },
      {
        id: 2,
        name: 'Server reboot scheduled',
        icon: 'fa fa-clock-o',
        time: 'Today at 11:11 AM'
      },
      {
        id: 3,
        name: 'Revenue raised by 67%',
        icon: 'fa fa-area-chart',
        time: 'Today at 1:45 PM'
      },
      {
        id: 4,
        name: '12 problems resolved',
        icon: 'fa fa-check',
        time: 'Today at 3:17 PM'
      }
    ];

    const languages: Language[] = [
      {
        id: 1,
        name: 'English',
        image: 'english'
      },
      {
        id: 2,
        name: 'French',
        image: 'french'
      },
      {
        id: 3,
        name: 'German',
        image: 'german'
      },
      {
        id: 4,
        name: 'Spanish',
        image: 'spanish'
      }
    ];

    const statistics: Statistics[] = [
      {
        id: 1,
        name: 'visitors',
        value: '1,274',
        icon: 'users',
        changePercent: 12,
        changeSince: 'last month'
      },
      {
        id: 2,
        name: 'subscribers',
        value: '248',
        icon: 'user-plus',
        changePercent: 8,
        changeSince: 'last month'
      },
      {
        id: 3,
        name: 'sales',
        value: '182',
        icon: 'area-chart',
        changePercent: -4,
        changeSince: 'last week'
      },
      {
        id: 4,
        name: 'revenue',
        value: '$ 8,694',
        icon: 'money',
        changePercent: -3,
        changeSince: 'last week'
      }
    ];

    return { users, conversations, alerts, languages, statistics };
  }
}
