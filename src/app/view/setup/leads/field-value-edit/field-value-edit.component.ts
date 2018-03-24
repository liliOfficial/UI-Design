import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-value-edit',
  templateUrl: './field-value-edit.component.html',
  styleUrls: ['./field-value-edit.component.css']
})
export class FieldValueEditComponent implements OnInit {

  edit = false;
  userKeyword: string;
  departmentKeyword: string;
  userDepartment = 'All Users';
  picklistValue = 'Jimmy Ye';

  blackListUser = ['Jimmy Ye', 'Ginny', 'Will'];
  blackListDepartment = [
    { id: 1, name: 'Company Administrator' },
    { id: 4, name: 'Sales' }
  ];

  avaliableDepartment = [
    { id: '0', name: 'All User' },
    { id: '1', name: 'Company Administrator' },
    { id: '2', name: 'Sales Administrator' },
    { id: '3', name: 'Sales Manager' },
    { id: '4', name: 'Sales' },
    { id: '5', name: 'Operation Administrator' },
    { id: '6', name: 'Operation Officer' },
    { id: '7', name: 'Finance Administrator' },
    { id: '8', name: 'Finance Officer' },
    { id: '9', name: 'Marketing Administrator' },
    { id: '10', name: 'Marketing Officer' }
  ];

  filteredDepartment = this.avaliableDepartment;

  userList = {
    '0': ['lili', 'Ronan', 'Jimmy', 'Winson', 'Will', 'Reena', 'Ginny'],
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

  users = this.userList[0];
  filteredUsers = this.users;

  showUser(department) {
    this.users = this.userList[department.id];
    this.filteredUsers = this.users;
    this.userDepartment = department.name;
  }

  addDepartment(department) {
    this.blackListDepartment.push(department);
  }

  addUser(user) {
    this.blackListUser.push(user);
  }

  removeUser(i) {
    this.blackListUser.splice(i, 1);
  }

  removeDepartment(i) {
    this.blackListDepartment.splice(i, 1);
  }

  departmentFilter() {
    this.filteredDepartment = this.avaliableDepartment.filter(element => element.name.toLowerCase().includes(this.departmentKeyword.toLowerCase()));
  }

  userFilter() {
    this.filteredUsers = this.users.filter(element => element.toLowerCase().includes(this.userKeyword.toLowerCase()));
  }

  constructor() { }

  ngOnInit() {
  }

}
