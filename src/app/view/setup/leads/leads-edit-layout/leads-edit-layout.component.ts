import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-edit-layout',
  templateUrl: './leads-edit-layout.component.html',
  styleUrls: ['./leads-edit-layout.component.css']
})
export class LeadsEditLayoutComponent implements OnInit {
  object = 'preview';
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
      'fieldName': 'name',
      'sectionName': 'leadDetail',
      'label': 'Name',
      'value': 'Jimmy',
      'required': 'true',
      'readonly': 'true'
    },
    {
      'id': 2,
      'fieldName': 'phone',
      'sectionName': 'leadDetail',
      'label': 'Phone',
      'value': '0405000000',
      'required': 'true'
    },
    {
      'id': 3,
      'fieldName': 'email',
      'sectionName': 'leadDetail',
      'label': 'Email',
      'value': 'test@testing.com',
      'required': 'true'
    },
    {
      'id': 4,
      'fieldName': 'gender',
      'sectionName': 'leadDetail',
      'label': 'Gender',
      'value': 'Female',
      'options': ['Male', 'Female']
    },
    {
      'id': 5,
      'fieldName': 'birthday',
      'sectionName': 'leadDetail',
      'label': 'Birthday',
      'value': '01/01/1999'
    },
    {
      'id': 6,
      'fieldName': 'account-type',
      'sectionName': 'leadDetail',
      'label': 'Account Type',
      'value': 'AGENT',
      'options': ['ECN/STP', 'AGENT'],
      'readonly': 'true'
    },
    {
      'id': 7,
      'fieldName': 'leverage',
      'sectionName': 'leadDetail',
      'label': 'Leverage',
      'value': '400:1',
      'options': ['500:1', '400:1', '300:1', '200:1', '100:1', '50:1']
    },
    {
      'id': 8,
      'fieldName': 'base-currency',
      'sectionName': 'leadDetail',
      'label': 'Base Currency',
      'value': 'USD',
      'options': ['USD', 'AUD', 'RMB']
    },
    {
      'id': 9,
      'fieldName': 'employment',
      'sectionName': 'leadDetail',
      'label': 'Employment',
      'value': 'Employed',
      'options': ['Employed', 'Unemployed', 'Retired', 'Student']
    },
    {
      'id': 10,
      'fieldName': 'skype',
      'sectionName': 'socialMedia',
      'label': 'Skype',
      'value': 'soul1234'
    },
    {
      'id': 11,
      'fieldName': 'wechat',
      'sectionName': 'socialMedia',
      'label': 'WeChat',
      'value': '231027'
    },
    {
      'id': 12,
      'fieldName': 'qq',
      'sectionName': 'socialMedia',
      'label': 'QQ',
      'value': '85694236'
    },
    {
      'id': 13,
      'fieldName': 'street',
      'sectionName': 'addressInformation',
      'label': 'Street',
      'value': 'Forest Street'
    },
    {
      'id': 14,
      'fieldName': 'city',
      'sectionName': 'addressInformation',
      'label': 'City',
      'value': 'Chatswood'
    },
    {
      'id': 15,
      'fieldName': 'state-provice',
      'sectionName': 'addressInformation',
      'label': 'State/Provice',
      'value': 'NSW'
    },
    {
      'id': 16,
      'fieldName': 'zip',
      'sectionName': 'addressInformation',
      'label': 'Zip',
      'value': ''
    }
  ];

  quickActions = [
    { id: '0', text: 'Opportunities', selected: true },
    { id: '1', text: 'Task Open', selected: false },
    { id: '2', text: 'Task History', selected: true },
    { id: '3', text: 'Email Sent', selected: true },
    { id: '4', text: 'Attachments', selected: false },
    { id: '5', text: 'Logs', selected: false },
  ];
  quickActionSelected = [
    { id: '0', text: 'Opportunities', selected: true },
    { id: '2', text: 'Task History', selected: true },
    { id: '3', text: 'Email Sent', selected: true }
  ];

  availableArea: string;
  movingQuickAction;

  targetQuickAction = -1;
  toQuickAction;

  chooseQuickAction(action, from, i) {
    this.availableArea = 'quickActions';
    this.movingQuickAction = action;

    if (from === 'list') {
      this.quickActions[i].selected = true;
    }
    if (from === 'showbox') {
      this.quickActionSelected.splice(i, 1);
    }
  }

  changeTargetQuickAction(i) {
    this.targetQuickAction = i + 1;
  }

  addQuickAction(to) {
    if (this.movingQuickAction) {
      if (to === 'showbox') {
        if (this.targetQuickAction !== -1) {
          this.quickActionSelected.splice(this.targetQuickAction, 0, this.movingQuickAction);
        } else {
          this.quickActionSelected.push(this.movingQuickAction);
        }

      }
      if (to === 'list') {
        this.quickActions.forEach(element => {
          if (element.id === this.movingQuickAction.id) {
            element.selected = false;
            console.log(element);
          }
        });
      }
    }

    this.availableArea = '';
    this.movingQuickAction = null;
  }

  mouseMove(e) {
    if (this.movingQuickAction) {
      document.getElementById('drag-item').style.top = e.clientY + 'px';
      document.getElementById('drag-item').style.left = (e.clientX + 15) + 'px';
    }

  }

  constructor() {
  }

  ngOnInit() {
  }

}
