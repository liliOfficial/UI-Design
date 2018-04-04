import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activities = [
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: '',
      accountName: 'bibibibi',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
