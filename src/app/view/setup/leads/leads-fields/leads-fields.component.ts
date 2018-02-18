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
      fieldLabel: 'Account Manager',
      apiName: 'Account_Manager',
      mapToAccount: 'Account Manager',
      mapToOpportunity: 'Account Manager',
      dataType: 'Picklist'
    },
    {
      fieldLabel: 'Team',
      apiName: 'Team',
      mapToAccount: 'Team',
      mapToOpportunity: 'Team',
      dataType: 'Picklist'
    },
    {
      fieldLabel: 'Source Type',
      apiName: 'Source Type',
      mapToAccount: 'Source Type',
      mapToOpportunity: 'Source Type',
      dataType: 'Picklist'
    },
    {
      fieldLabel: 'Lead Type',
      apiName: 'Lead Type',
      mapToAccount: 'Lead Type',
      mapToOpportunity: 'Lead Type',
      dataType: 'Picklist'
    },
    {
      fieldLabel: 'Last Modified By',
      apiName: 'Last Modified By',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Date/Time'
    },
    {
      fieldLabel: 'Created By',
      apiName: 'Created By',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Text'
    },
    {
      fieldLabel: 'Created Date',
      apiName: 'Created Date',
      mapToAccount: 'Can not be Map',
      mapToOpportunity: 'Can not be Map',
      dataType: 'Date/Time'
    }
  ];

  pickList = [
    { fieldLabel: 'Account Manager', chosen: true },
    { fieldLabel: 'Team', chosen: false },
    { fieldLabel: 'Source Type', chosen: false },
    { fieldLabel: 'Lead Type', chosen: false },
    { fieldLabel: 'Lead Status', chosen: false },
    { fieldLabel: 'First Name', chosen: true },
    { fieldLabel: 'Last Name', chosen: true },
  ];

  editField;
  constructor() { }

  ngOnInit() {
  }

}
