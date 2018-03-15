import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  activeFolder = 'Private Template';
  currentFolders = 'Jimmy';
  userDepartment = 'User in the Department';
  activeTab = 'templates';
  departmentUsers;
  filteredUsers;
  userKeyword;

  folders = ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
    'Sales Team', 'Market Team', 'Personal 1', 'Personal 2', 'Personal 3', 'Personal 4',
    'Personal 5', 'Personal 6', 'Personal 7'];

  templates = [
    {
      id: 145235,
      name: 'ACY Live Account',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Live account'
    },
    {
      id: 145237,
      name: 'Demo Account',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145258,
      name: 'Market',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145291,
      name: 'Sales',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145299,
      name: 'Administrator',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
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

  folderList = {
    'lili': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Personal 1', 'Personal 2', 'Personal 3'],
    'Ronan': ['Private Template', 'Shared Folder'],
    'Jimmy': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Sales Team', 'Market Team', 'Personal 1', 'Personal 2', 'Personal 3', 'Personal 4',
      'Personal 5', 'Personal 6', 'Personal 7'],
    'Winson': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Sales Team', 'Market Team', 'Personal 3', 'Personal 4',
      'Personal 5', 'Personal 6', 'Personal 7'],
    'Will': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Personal 3', 'Personal 4', 'Personal 5', 'Personal 6', 'Personal 7'],
    'Ginny': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Market Team', 'Personal 1', 'Personal 2', 'Personal 3', 'Personal 4',
      'Personal 5'],
    'Reena': ['Private Template', 'Shared Folder', 'Genaral Folder', 'Private Folder',
      'Sales Team'],
  };

  showTeamUser(value) {
    this.userDepartment = value.name;
    this.departmentUsers = this.userList[value.id];
    this.filteredUsers = this.departmentUsers;
  }

  userFilter() {
    this.filteredUsers = this.departmentUsers.filter(element => element.toLowerCase().includes(this.userKeyword.toLowerCase()));
  }

  showFolder(key) {
    this.currentFolders = key;
    this.folders = this.folderList[key];
  }

  constructor() { }

  ngOnInit() {
  }

}
