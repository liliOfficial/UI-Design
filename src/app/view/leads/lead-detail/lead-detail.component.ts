import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent implements OnInit {

  sections = [
    { 'text': 'Lead Detail', 'sectionName': 'leadDetail' },
    { 'text': 'Social Media', 'sectionName': 'socialMedia' },
    { 'text': 'Address Information', 'sectionName': 'addressInformation' },
    { 'text': 'Additional Information', 'sectionName': 'Additional Information' },
    { 'text': 'Company Detail', 'sectionName': 'companyDetail' }
  ];

  lists = [
    {
      'id': 1,
      'sectionName': 'leadDetail',
      'label': 'Name',
      'content': { 'type': 'text', 'text': 'Jimmy' },
      'required': 'true',
      'readonly': 'true'
    },
    {
      'id': 2,
      'sectionName': 'leadDetail',
      'label': 'Phone',
      'content': { 'type': 'text', 'text': '0405000000' },
      'required': 'true'
    },
    {
      'id': 3,
      'sectionName': 'leadDetail',
      'label': 'Email',
      'content': { 'type': 'text', 'text': 'test@testing.com' },
      'required': 'true'
    },
    {
      'id': 4,
      'sectionName': 'leadDetail',
      'label': 'Gender',
      'content': {
        'type': 'select',
        'options': ['Male', 'Female'],
        'selected': 'Female'
      }
    },
    {
      'id': 5,
      'sectionName': 'leadDetail',
      'label': 'Birthday',
      'content': { 'type': 'text', 'text': '01/01/1999' }
    },
    {
      'id': 6,
      'sectionName': 'leadDetail',
      'label': 'Account Type',
      'content': { 'type': 'select', 'options': ['ECN/STP', 'AGENT'], 'selected': 'AGENT', },
      'readonly': 'true'
    },
    {
      'id': 7,
      'sectionName': 'leadDetail',
      'label': 'Leverage',
      'content': {
        'type': 'select',
        'options': ['500:1', '400:1', '300:1', '200:1', '100:1', '50:1'],
        'selected': '400:1'
      }
    },
    {
      'id': 8,
      'sectionName': 'leadDetail',
      'label': 'Base Currency',
      'content': {
        'type': 'select',
        'options': ['USD', 'AUD', 'RMB'],
        'selected': 'USD'
      }
    },
    {
      'id': 9,
      'sectionName': 'leadDetail',
      'label': 'Employment',
      'content': {
        'type': 'select',
        'options': ['Employed', 'Unemployed', 'Retired', 'Student'],
        'selected': 'Employed'
      }
    },
    {
      'id': 10,
      'sectionName': 'socialMedia',
      'label': 'Skype',
      'content': { 'type': 'text', 'text': 'soul1234' }
    },
    {
      'id': 11,
      'sectionName': 'socialMedia',
      'label': 'WeChat',
      'content': { 'type': 'text', 'text': '231027' }
    },
    {
      'id': 12,
      'sectionName': 'socialMedia',
      'label': 'QQ',
      'content': { 'type': 'text', 'text': 'testing@testing.com' }
    },
    {
      'id': 13,
      'sectionName': 'addressInformation',
      'label': 'Street',
      'content': { 'type': 'text', 'text': '' }
    },
    {
      'id': 14,
      'sectionName': 'addressInformation',
      'label': 'City',
      'content': { 'type': 'text', 'text': '' }
    },
    {
      'id': 15,
      'sectionName': 'addressInformation',
      'label': 'State/Provice',
      'content': { 'type': 'text', 'text': '' }
    },
    {
      'id': 16,
      'sectionName': 'addressInformation',
      'label': 'Zip',
      'content': { 'type': 'text', 'text': '' }
    }

  ];


  constructor() { }

  ngOnInit() {
  }

}
