import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {
  sections = [
    { 'text': 'Opportunity Detail', 'sectionName': 'opportunityDetail' },
    { 'text': 'MT4 Account Details', 'sectionName': 'mt4AccountDetails' },
    { 'text': 'Opportunity Information', 'sectionName': 'opportunityInformation' },
    { 'text': 'Trader\'s Levelling Promotion', 'sectionName': 'levelling-promotion' },
    { 'text': 'System Information', 'sectionName': 'systemInformation' }
  ];

  lists = [
    {
      'id': 1,
      'fieldName': 'account-name',
      'sectionName': 'opportunityDetail',
      'label': 'Account Name',
      'value': 'Jimmy',
      'required': 'true',
      'readonly': 'true',
      'help': 'Account Name, 就是这个Account 的姓名'
    },
    {
      'id': 2,
      'fieldName': 'close-date',
      'sectionName': 'opportunityDetail',
      'label': 'Close Date',
      'value': '1-10-2015',
      'required': 'true',
      'readonly': 'true',
      'help': '就是当天'
    },
    {
      'id': 3,
      'fieldName': 'opportunity-name',
      'sectionName': 'opportunityDetail',
      'label': 'Opportunity Name ',
      'value': 'aaaaaaaa',
      'required': 'true',
      'help': '最后是同步回 LogixPanel Admin中该MT4 的账户名'
    },
    {
      'id': 4,
      'fieldName': 'stage',
      'sectionName': 'opportunityDetail',
      'label': 'Stage',
      'value': 'Close Won',
      'options': ['Prospecting', 'Close Won', 'Close Lost'],
      'help': 'aaa sdjfldskjf askdjflksdjf'
    },
    {
      'id': 5,
      'fieldName': 'opportunity-type',
      'sectionName': 'mt4AccountDetails',
      'label': 'Opportunity Type',
      'value': 'Initial Account',
      'options': ['Initial Account', 'Additional Account', 'Agent Account', 'MAM Account', 'Anonymous Account']
    },
    {
      'id': 6,
      'fieldName': 'trading-account-type',
      'sectionName': 'mt4AccountDetails',
      'label': 'Trading Account Type',
      'value': 'AGENT',
      'readonly': 'true',
      'help': '同步LogixPanel Admin'
    },
    {
      'id': 7,
      'fieldName': 'platform',
      'sectionName': 'mt4AccountDetails',
      'label': 'Platform',
      'value': 'MetaTrader 4',
      'readonly': 'true',
      'help': '同步LogixPanel Admin'
    },
    {
      'id': 8,
      'fieldName': 'platform-id',
      'sectionName': 'mt4AccountDetails',
      'label': 'Platform ID',
      'value': 'adsfsadsf',
    },
    {
      'id': 9,
      'fieldName': 'platform-password',
      'sectionName': 'mt4AccountDetails',
      'label': 'Platform Password',
      'value': 'aaaaaaaaaaaaa'
    },
    {
      'id': 10,
      'fieldName': 'portal-password',
      'sectionName': 'mt4AccountDetails',
      'label': 'Portal Password',
      'value': 'soul1234'
    },
    {
      'id': 11,
      'fieldName': 'balance',
      'sectionName': 'opportunityInformation',
      'label': 'Balance',
      'value': '231027',
      'readonly': 'true'
    },
    {
      'id': 12,
      'fieldName': 'total-deposit',
      'sectionName': 'opportunityInformation',
      'label': 'Total Deposit',
      'value': '85694236',
      'readonly': 'true'
    },
    {
      'id': 13,
      'fieldName': 'total-withdrawal',
      'sectionName': 'opportunityInformation',
      'label': 'Total Withdrawal',
      'value': 'Forest Street',
      'readonly': 'true'
    },
    {
      'id': 14,
      'fieldName': 'initial-deposit',
      'sectionName': 'opportunityInformation',
      'label': 'Initial Deposit',
      'value': '456789',
      'readonly': 'true'
    },
    {
      'id': 15,
      'fieldName': 'initial-deposit-date',
      'sectionName': 'opportunityInformation',
      'label': 'Initial Deposit Date',
      'value': '10/05/2017',
      'readonly': 'true'
    },
    {
      'id': 16,
      'fieldName': 'upgrade-date',
      'sectionName': 'opportunityInformation',
      'label': 'Upgrade Date',
      'value': '01/01/2018',
      'readonly': 'true'
    },
    {
      'id': 17,
      'fieldName': 'net-deposit',
      'sectionName': 'opportunityInformation',
      'label': 'Net Deposit',
      'value': '456789',
      'readonly': 'true'
    },
    {
      'id': 18,
      'fieldName': 'fx',
      'sectionName': 'levelling-promotion',
      'label': 'FX (Lots)',
      'value': '11',
      'readonly': 'true'
    },
    {
      'id': 19,
      'fieldName': 'metals',
      'sectionName': 'levelling-promotion',
      'label': 'Metals (Lots)',
      'value': '11111',
      'readonly': 'true'
    },
    {
      'id': 20,
      'fieldName': 'volume',
      'sectionName': 'levelling-promotion',
      'label': 'Volume (Lots)',
      'value': '111',
      'readonly': 'true'
    },
    {
      'id': 21,
      'fieldName': 'cdf',
      'sectionName': 'levelling-promotion',
      'label': 'CFD (Lots)',
      'value': '456789',
      'readonly': 'true'
    },
    {
      'id': 22,
      'fieldName': 'created-by',
      'sectionName': 'systemInformation',
      'label': 'Created By',
      'value': 'Michael (User)',
      'readonly': 'true'
    },
    {
      'id': 23,
      'fieldName': 'last-modified-by',
      'sectionName': 'systemInformation',
      'label': 'Last Modified By',
      'value': 'Michael (User), 22-09-2017 12:02 PM',
      'readonly': 'true'
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

  opportunityId: number;
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
    console.log('current lead ID ' + this.opportunityId);
  }

  goBack() {
    window.history.back();
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.opportunityId = + params['id'];
    });
  }

}
