import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  theaders = [
    {
      text: 'Last Activity',
      key: 'lastactivity',
      type: 'date'
    },
    {
      text: 'Accout Manager',
      key: 'accountManager',
    },
    {
      text: 'Account Name',
      key: 'accountName',
    },
    {
      text: 'Created Date',
      key: 'createdDate',
      type: 'date'
    },
    {
      text: 'Total Deposit',
      key: 'totalDeposit',
      type: 'number'
    },
  ];

  data = [
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 10000
    },
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 5000
    },
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 2000
    },
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 7000
    },
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 8000
    },
    {
      accountManager: 'Jimmy',
      accountName: 'Will',
      createdDate: '28-02-2017',
      totalDeposit: 11000
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
