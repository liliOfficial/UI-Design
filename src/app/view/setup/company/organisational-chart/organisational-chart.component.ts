import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisational-chart',
  templateUrl: './organisational-chart.component.html',
  styleUrls: ['./organisational-chart.component.css']
})
export class OrganisationalChartComponent implements OnInit {
  addNewDepartment = false;
  departmentPopup = false;
  warning = false;
  editMethod = false;
  parentDepartment: string;
  targetDepartment: string;
  users;
  moveUser;
  userDepartment = 'Please choose department to show users';
  organisation = [
    {
      id: '0',
      name: 'No Department',
    },
    {
      id: '1',
      name: 'Company Administrator',
      children: [
        {
          id: '2',
          name: 'Sales Administrator',
          children: [
            {
              id: '3',
              name: 'Sales Manager',
              children: [
                { id: '4', name: 'Sales' },
              ]
            }
          ]
        },
        {
          id: '5',
          name: 'Operation Administrator',
          children: [
            { id: '6', name: 'Operation Officer' }
          ]
        },
        {
          id: '7',
          name: 'Finance Administrator',
          children: [
            { id: '8', name: 'Finance Officer' }
          ]
        },
        {
          id: '9',
          name: 'Marketing Administrator',
          children: [
            { id: '10', name: 'Marketing Officer' }
          ]
        }
      ]
    }
  ];

  userList = {
    '0': ['lili', 'Ronan'],
    '1': ['Jimmy', 'Winson'],
    '2': ['Jimmy', 'Winson'],
    '3': ['Will', 'Winson'],
    '4': ['Will', 'Jimmy'],
    '5': ['Reena', 'Winson'],
    '6': ['Will', 'Winson'],
    '7': ['Ginny', 'Jimmy', 'Winson'],
    '8': ['Will', 'Winson'],
    '9': ['Ginny', 'Winson'],
    '10': ['Will', 'Winson']
  };

  pickDepartment(value) {

    if (value[0] === 'add') {
      this.parentDepartment = value[1];
      this.addNewDepartment = true;
    }
    if (value[0] === 'delete') {
      this.warning = true;
    }
    if (value[0] === 'user') {
      const userKey = value[2];
      this.userDepartment = value[1];
      this.users = this.userList[userKey];
    }
  }

  move(value) {
    this.moveUser = value;
    this.departmentPopup = true;
  }

  chooseDepartment(value) {
    this.targetDepartment = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
