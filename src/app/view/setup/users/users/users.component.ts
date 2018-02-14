import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  paginationTextShow = true;
  fields = [
    { text: 'Users', jsonKey: 'users' },
    { text: 'Join Date', jsonKey: 'joinDate' },
    { text: 'Department', jsonKey: 'departments' },
    { text: 'Lead Page Layout', jsonKey: 'leadPageLayout' },
    { text: 'Account Page Layout', jsonKey: 'accountPageLayout' },
    { text: 'Opportunity Page Layout', jsonKey: 'opportunityPageLayout' }
  ];
  json = [
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '333333',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '678990',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Jimmy Ye',
      joinDate: '05-01-2018',
      departments: 'Company Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    },
    {
      id: '123456',
      users: 'Winson Cao',
      joinDate: '23-01-2018',
      departments: 'Sales Administrator',
      leadPageLayout: 'Company Administrator',
      accountPageLayout: 'Company Administrator',
      opportunityPageLayout: 'Company Administrator'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
