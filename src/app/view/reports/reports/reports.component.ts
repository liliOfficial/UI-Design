import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reportOwner = 'my';
  reportType: string;
  newReportPopup = false;

  reports = [
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Accounts',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Accounts',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Opportunities',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Opportunities',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
