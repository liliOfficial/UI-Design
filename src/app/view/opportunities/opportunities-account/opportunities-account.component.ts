import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '.opportunities',
  templateUrl: './opportunities-account.component.html',
  styleUrls: ['./opportunities-account.component.css']
})
export class OpportunitiesAccountComponent implements OnInit {
  opportunities = [
    {
      id: '11111',
      name: 'Jimmy',
      tradingAccountType: 'ECNSTP',
      plateform: 'MetaTrader 4',
      plateformId: '123068',
      balance: '$0.13',
      stage: 'Close Won',
      closeDate: '1-10-2015',
      opportunityType: 'Initial Account'
    },
    {
      id: '22222',
      name: 'Jimmy',
      tradingAccountType: 'ECNSTP',
      plateform: 'MetaTrader 4',
      plateformId: '123068',
      balance: '$28.60',
      stage: 'Close Lost',
      closeDate: '6-04-2017',
      opportunityType: 'Additional Account'
    },
    {
      id: '33333',
      name: 'Jimmy',
      tradingAccountType: 'ECNSTP',
      plateform: 'MetaTrader 4',
      plateformId: '123068',
      balance: '$0.13',
      stage: 'Close Won',
      closeDate: '1-10-2015',
      opportunityType: 'Initial Account'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
