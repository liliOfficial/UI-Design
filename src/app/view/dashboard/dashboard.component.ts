import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients = [
    {
      id: 8956,
      name: 'Will Bai',
      type: 'lead'
    },
    {
      id: 8888,
      name: 'Li Li',
      type: 'lead'
    },
    {
      id: 9999,
      name: 'Jimmy Ye',
      type: 'account'
    },
    {
      id: 7878,
      name: 'Sharon',
      type: 'lead'
    },
    {
      id: 6666,
      name: 'Ronan',
      type: 'account'
    },
    {
      id: 1234,
      name: 'Ginny',
      type: 'account'
    },
    {
      id: 9999,
      name: 'Jimmy Ye',
      type: 'lead'
    },
    {
      id: 7878,
      name: 'Sharon',
      type: 'lead'
    },
    {
      id: 6666,
      name: 'Ronan',
      type: 'account'
    },
    {
      id: 1234,
      name: 'Ginny',
      type: 'lead'
    }
  ];
  activities = [
    {
      subject: 'Ask For Photo ID',
      due: '18/01/2018 8:30AM',
      leadName: 'Will Bai',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: 'Create New Account',
      due: '18/01/2018 8:30AM',
      leadName: 'Li Li',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: 'Check Deposit Ammount',
      due: '18/01/2018 8:30AM',
      leadName: '',
      accountName: 'Jimmy Ye',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'Ginney',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: 'Convert Lead To Account',
      due: '18/01/2018 8:30AM',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: 'Create New Opportunites',
      due: '18/01/2018 8:30AM',
      leadName: '',
      accountName: 'Jimmy Ye',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: 'Check MT4 Status',
      due: '18/01/2018 8:30AM',
      leadName: 'Li Li',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    }
  ];

  report = [
    {
      month: 'Jan',
      no: 45698
    },
    {
      month: 'Feb',
      no: 152
    },
    {
      month: 'Mar',
      no: 987
    },
    {
      month: 'Jun',
      no: 3256
    },
    {
      month: 'Oct',
      no: 2333
    },
  ];

  dashboards = [
    {
      name: 'Sales Folder',
      dashboards: ['Sales Dashboard 1', 'Sales Dashboard 2', 'Sales Dashboard 3']
    },
    {
      name: 'Market Folder',
      dashboards: ['Market Dashboard 1', 'Market Dashboard 2', 'Market Dashboard 3']
    },
    {
      name: 'Admin Folder',
      dashboards: ['Admin Dashboard 1', 'Admin Dashboard 2', 'Admin Dashboard 3']
    },
  ];
  dashboardName = this.dashboards[0].dashboards[0];

  constructor() { }

  ngOnInit() {
  }

}
