import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-fields',
  templateUrl: './leads-fields.component.html',
  styleUrls: ['./leads-fields.component.css']
})
export class LeadsFieldsComponent implements OnInit {
  edit = false;
  defaultFields = [
    {
      id: '1',
      fieldLabel: 'Account Manager',
      apiName: 'Account_Manager',
      mapToAccount: 'Account Manager',
      mapToOpportunity: 'Account Manager',
      dataType: 'Picklist'
    },
    {
      id: '2',
      fieldLabel: 'Team',
      apiName: 'Team',
      mapToAccount: 'Team',
      mapToOpportunity: 'Team',
      dataType: 'Picklist'
    },
    {
      id: '3',
      fieldLabel: 'Source Type',
      apiName: 'Source Type',
      mapToAccount: 'Source Type',
      mapToOpportunity: 'Source Type',
      dataType: 'Picklist'
    },
    {
      id: '4',
      fieldLabel: 'Lead Type',
      apiName: 'Lead Type',
      mapToAccount: 'Lead Type',
      mapToOpportunity: 'Lead Type',
      dataType: 'Picklist'
    },
    {
      id: '5',
      fieldLabel: 'Last Modified By',
      apiName: 'Last Modified By',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Date/Time'
    },
    {
      id: '6',
      fieldLabel: 'Created By',
      apiName: 'Created By',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Text'
    },
    {
      id: '7',
      fieldLabel: 'Created Date',
      apiName: 'Created Date',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Date/Time'
    }
  ];

  pickListAccount = [
    { fieldLabel: 'Account Manager', chosen: true, map: false },
    { fieldLabel: 'Team', chosen: false, map: false },
    { fieldLabel: 'Source Type', chosen: false, map: false },
    { fieldLabel: 'Lead Type', chosen: false, map: false },
    { fieldLabel: 'Lead Status', chosen: false, map: false },
    { fieldLabel: 'First Name', chosen: false, map: false },
    { fieldLabel: 'Last Name', chosen: false, map: false },
  ];

  pickListOpportunity = [
    { fieldLabel: 'Account Manager', chosen: true, map: false },
    { fieldLabel: 'Team', chosen: false, map: false },
    { fieldLabel: 'Source Type', chosen: false, map: false },
    { fieldLabel: 'Lead Type', chosen: false, map: false },
    { fieldLabel: 'Lead Status', chosen: false, map: false },
    { fieldLabel: 'First Name', chosen: true, map: false },
    { fieldLabel: 'Last Name', chosen: true, map: false },
  ];

  editField = { fieldLabel: '', mapToAccount: '', mapToOpportunity: '' };
  editIndex: number;
  mapTarget;

  chooseEditField(field, target) {
    this.mapTarget = target;
    this.editField = field;
    this.initAccountList();
    if (target === 'Account') {
      this.pickListAccount.forEach(element => {
        if (element.fieldLabel === this.editField.mapToAccount) {
          element.map = true;
          element.chosen = false;
        }
      });
    }
    if (target === 'Opportunity') {
      console.log('Map to Opportunity');
    }
  }

  initAccountList() {
    this.pickListAccount.forEach(element => {
      element.map = false;
      this.defaultFields.forEach(field => {
        if (element.fieldLabel === field.mapToAccount) {
          element.chosen = true;
        }
      });
    });
  }

  initOpportunityList() {
    this.pickListOpportunity.forEach(element => {
      element.map = false;
      this.defaultFields.forEach(field => {
        if (element.fieldLabel === field.mapToOpportunity) {
          element.chosen = true;
        }
      });
    });
  }

  submitMapToAccount() {

  }

  submitMapToOpportunity() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
