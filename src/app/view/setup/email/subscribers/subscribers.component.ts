import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {
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
  ];
  constructor() { }

  ngOnInit() {
  }

}
