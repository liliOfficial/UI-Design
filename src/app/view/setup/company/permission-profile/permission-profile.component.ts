import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-profile',
  templateUrl: './permission-profile.component.html',
  styleUrls: ['./permission-profile.component.css']
})
export class PermissionProfileComponent implements OnInit {
  departmentPopup = false;

  team;

  tabSettings = [
    { text: 'Dashboard', value: true },
    { text: 'Leads', value: true },
    { text: 'Accounts', value: true },
    { text: 'Opportunities', value: true },
    { text: 'Report', value: true },
  ];

  conditions = [
    { text: 'Tab', jsonKey: 'text' },
    { text: 'View', jsonKey: 'view' },
    { text: 'Create', jsonKey: 'create' },
    { text: 'Edit', jsonKey: 'edit' },
    { text: 'Delete', jsonKey: 'delete' },
  ];

  tabConditions = [
    { id: '0', text: 'Dashboard', view: true, create: true, edit: false, delete: false },
    { id: '1', text: 'Report', view: true, create: true, edit: false, delete: false },
    { id: '2', text: 'Leads', view: true, create: true, edit: false, delete: false },
    { id: '3', text: 'Accountss', view: true, create: true, edit: false, delete: false },
    { id: '4', text: 'Opportunities', view: true, create: true, edit: false, delete: false },
  ];

  save() {
    console.log('setting:', this.tabSettings);
    console.log('conditions:', this.tabConditions);
  }

  chooseDepartment(value) {
    this.team = value;
    this.departmentPopup = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
