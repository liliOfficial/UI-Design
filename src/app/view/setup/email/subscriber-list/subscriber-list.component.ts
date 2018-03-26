import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
  styleUrls: ['./subscriber-list.component.css']
})
export class SubscriberListComponent implements OnInit {
  subscriberList = [
    {
      name: '2018 Lottery',
      type: 'Leads',
      activeSubscribers: '900',
      unsubscribers: '10',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Live account'
    },
    {
      name: 'Live Account',
      type: 'Account',
      activeSubscribers: '5000',
      unsubscribers: '20',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      name: 'Funding',
      type: 'Opportunity',
      activeSubscribers: '5000',
      unsubscribers: '20',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
