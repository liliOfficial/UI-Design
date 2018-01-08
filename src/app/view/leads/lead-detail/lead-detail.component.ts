import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lead-detail',
  templateUrl: './lead-detail.component.html',
  styleUrls: ['./lead-detail.component.css']
})
export class LeadDetailComponent implements OnInit {
  lists = [
    {
      'id': 1,
      'label': 'Name',
      'content': { 'type': 'text', 'text': 'Jimmy' },
      'required': 'true',
      'readonly': 'true'
    },
    {
      'id': 2,
      'label': 'Phone',
      'content': { 'type': 'text', 'text': '0405000000' },
      'required': 'true'
    },
    {
      'id': 3,
      'label': 'Email',
      'content': { 'type': 'text', 'text': 'test@testing.com' },
      'required': 'true'
    },
    {
      'id': 4,
      'label': 'Gender',
      'content': {
        'type': 'select',
        'options': ['Male', 'Female'],
        'selected': 'Female'
      }
    },
    {
      'id': 5,
      'label': 'Birthday',
      'content': { 'type': 'text', 'text': '01/01/1999' }
    },
    {
      'id': 6,
      'label': 'Account Type',
      'content': { 'type': 'select', 'options': ['ECN/STP', 'AGENT'], 'selected': 'AGENT', },
      'readonly': 'true'
    },
    {
      'id': 7,
      'label': 'Leverage',
      'content': {
        'type': 'select',
        'options': ['500:1', '400:1', '300:1', '200:1', '100:1', '50:1'],
        'selected': '400:1'
      }
    },
    {
      'id': 8,
      'label': 'Base Currency',
      'content': {
        'type': 'select',
        'options': ['USD', 'AUD', 'RMB'],
        'selected': 'USD'
      }
    },
    {
      'id': 9,
      'label': 'Employment',
      'content': {
        'type': 'select',
        'options': ['Employed', 'Unemployed', 'Retired', 'Student'],
        'selected': 'Employed'
      }
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
