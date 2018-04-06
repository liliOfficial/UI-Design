import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  activities = [
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'Jimmy',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'Jimmy',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: '',
      accountName: 'Will Bai',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
      leadName: 'bibibibi',
      accountName: '',
      status: 'Not Started',
      createdDate: '17/01/2018',
      lastActivity: '18/01/2018',
    },
    {
      subject: '新建模拟账户',
      due: '18/01/2018 8:30AM',
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
