import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-share',
  templateUrl: './reports-share.component.html',
  styleUrls: ['./reports-share.component.css']
})
export class ReportsShareComponent implements OnInit {
  chartShow = false;
  users = [
    { id: '1', name: 'Jimmy', share: true },
    { id: '2', name: 'Will', share: false },
    { id: '3', name: 'Ginney', share: false },
    { id: '4', name: 'Lily', share: false }
  ];
  sharedUser = [];
  sharedTeam = ['Company Administrator'];
  userDepartment = 'Click Chart to Choose Department';
  departmentUsers;
  filteredUsers;
  userKeyword;
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

  showTeamUser(value) {
    this.userDepartment = value.name;
    this.departmentUsers = this.userList[value.id];
    this.filteredUsers = this.departmentUsers;
  }

  addUser(user) {
    const pushUser = { id: this.users.length, name: user, share: true };
    this.sharedUser.push(pushUser);
  }

  userFilter() {
    this.filteredUsers = this.departmentUsers.filter(element => element.toLowerCase().includes(this.userKeyword.toLowerCase()));
  }

  chooseDepartment(value) {
    this.sharedTeam.push(value);
  }

  removeUser(id) {
    this.sharedUser.forEach((element, index) => {
      if (element.id === id) {
        this.sharedUser.splice(index, 1);
      }
    });
    this.users.forEach(element => {
      if (element.id === id) {
        element.share = false;
      }
    });
  }

  removeTeam(index) {
    this.sharedTeam.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
