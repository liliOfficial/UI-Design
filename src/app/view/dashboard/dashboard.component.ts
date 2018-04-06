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
    },
    {
      id: 8888,
      name: 'Li Li',
    },
    {
      id: 9999,
      name: 'Jimmy Ye',
    },
    {
      id: 7878,
      name: 'Sharon',
    },
    {
      id: 6666,
      name: 'Ronan',
    },
    {
      id: 1234,
      name: 'Ginny',
    },
    {
      id: 9999,
      name: 'Jimmy Ye',
    },
    {
      id: 7878,
      name: 'Sharon',
    },
    {
      id: 6666,
      name: 'Ronan',
    },
    {
      id: 1234,
      name: 'Ginny',
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

  dashboards = ['Sales Dashboard', 'Admin Dashboard', 'Marketing Dashboard', 'Default Dashboard'];
  dashboardName = this.dashboards[0];

  constructor() { }

  ngOnInit() {
  }

}
