import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
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

  listBackup = [
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

  leadId: number;
  private sub: any;

  edit(i) {
    this.lists.forEach(element => {
      element['edit'] = false;
    });
    this.lists[i]['edit'] = true;
  }

  undo(i) {
    this.lists[i].value = this.listBackup[i].value;
    this.lists[i]['change'] = false;
  }

  undoAll() {
    this.lists = this.listBackup;
    this.lists.forEach(element => {
      element['change'] = false;
    });
  }

  output() {
    const result = {};
    this.lists.forEach(element => {
      const key = element.fieldName;
      const value = element.value;
      result[key] = value;
    });
    console.log(result);
    console.log('current lead ID ' + this.leadId);
  }

  constructor() { }

  ngOnInit() {
  }

}
