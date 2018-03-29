import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-edit-layout',
  templateUrl: './leads-edit-layout.component.html',
  styleUrls: ['./leads-edit-layout.component.css']
})
export class LeadsEditLayoutComponent implements OnInit {
  object = 'field';
  fieldSettingPopup = false;

  sections = [
    { id: 0, text: 'Lead Detail', 'sectionName': 'leadDetail' },
    { id: 1, text: 'Description', 'sectionName': 'description' },
    { id: 2, text: 'Social Media', 'sectionName': 'socialMedia' },
    { id: 3, text: 'Address Information', 'sectionName': 'addressInformation' },
    { id: 4, text: 'Additional Information', 'sectionName': 'Additional Information' },
    { id: 5, text: 'Company Detail', 'sectionName': 'companyDetail' }
  ];

  lists = [
    {
      'id': 1,
      'fieldName': 'name',
      'sectionName': 'leadDetail',
      'label': 'Name',
      'value': 'Name of the Lead',
      'required': true,
      'readonly': true
    },
    {
      'id': 2,
      'fieldName': 'phone',
      'sectionName': 'leadDetail',
      'label': 'Phone',
      'value': 'Phone number',
      'required': true
    },
    {
      'id': 3,
      'fieldName': 'email',
      'sectionName': 'leadDetail',
      'label': 'Email',
      'value': 'Email Adress',
      'required': true
    },
    {
      'id': 4,
      'fieldName': 'gender',
      'sectionName': 'leadDetail',
      'label': 'Gender',
      'value': 'Female or Male',
      'options': ['Male', 'Female']
    },
    {
      'id': 5,
      'fieldName': 'birthday',
      'sectionName': 'leadDetail',
      'label': 'Birthday',
      'value': 'Date of Birth in the format of dd/mm/yyy'
    },
    {
      'id': 6,
      'fieldName': 'account-type',
      'sectionName': 'leadDetail',
      'label': 'Account Type',
      'value': 'Option with the value of "AGENT" or "ECN/STP"',
      'options': ['ECN/STP', 'AGENT'],
      'readonly': true
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
      'fieldName': 'annual-income',
      'sectionName': 'leadDetail',
      'label': 'Employment',
      'value': '$30,000-$79,999',
      'options': ['Less than $29,999', '$30,000-$79,999', '$80,000-$140,999', '$150,000+']
    },
    {
      'id': 11,
      'fieldName': 'total-investment',
      'sectionName': 'leadDetail',
      'label': 'Total Investment',
      'value': 'Less than $29,999',
      'options': ['Less than $29,999', '$30,000-$79,999', '$80,000-$140,999', '$150,000+']
    },
    {
      'id': 12,
      'fieldName': 'accepted-terms',
      'sectionName': 'leadDetail',
      'label': 'Accepted Terms',
      'value': 'Yes',
      'options': ['Yes', 'No']
    },
    {
      'id': 13,
      'fieldName': 'agent',
      'sectionName': 'leadDetail',
      'label': 'Agent',
      'value': '1234566'
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

  tools = [
    { id: 0, text: 'Covert', selected: true },
    { id: 1, text: 'Delete', selected: true },
    { id: 2, text: 'Sharing', selected: true },
    { id: 3, text: 'Find Duplicate', selected: true },
  ];

  toolSelected = [
    { id: 0, text: 'Covert', selected: true },
    { id: 1, text: 'Delete', selected: true },
    { id: 2, text: 'Sharing', selected: true },
    { id: 3, text: 'Find Duplicate', selected: true },
  ];

  modules = [
    { id: '0', text: 'Opportunities', selected: true },
    { id: '1', text: 'Task Open', selected: false },
    { id: '2', text: 'Task History', selected: true },
    { id: '3', text: 'Email Sent', selected: true },
    { id: '4', text: 'Attachments', selected: false },
    { id: '5', text: 'Logs', selected: false },
  ];

  moduleSelected = [
    { id: '0', text: 'Opportunities', selected: true },
    { id: '2', text: 'Task History', selected: true },
    { id: '3', text: 'Email Sent', selected: true }
  ];

  settingField = this.lists[0];



  availableArea: string;
  movingQuickAction;

  targetQuickAction = -1;
  toQuickAction;

  // Sections and Fields

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

  // Sections and Fields

  chooseSection(s) {
    this.availableArea = 'section';
  }

  addsection(s) {
    if (this.availableArea === 'section') {
      const newSectionId = this.sections.length;
      const newSection = { id: newSectionId, text: 'New Section', sectionName: ' ' };
      this.sections.splice(s, 0, newSection);
    }
    this.availableArea = '';
  }

  fieldSetting(field) {
    this.settingField = field;
    this.fieldSettingPopup = true;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
