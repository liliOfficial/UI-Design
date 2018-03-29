import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
  tab = 'search';
  subscribers = [
    {
      name: 'Jimmy Ye',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Michael'
    },
    {
      name: 'Will',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Renee'
    },
    {
      name: 'Renee',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Michael'
    },
    {
      name: 'Ronan',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Renee'
    },
    {
      name: 'Colin',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Michael'
    },
    {
      name: 'Will',
      state: 'Sydney',
      country: 'Australia',
      email: '123654@qq.com',
      addedDate: '17/09/2017',
      manager: 'Renee'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
