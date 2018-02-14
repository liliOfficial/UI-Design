import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  paginationTextShow = true;
  popupShow = false;

  fields = [
    {
      id: '1', 'type': 'input', 'text': 'Name', 'jsonKey': 'name'
    },
    { id: '2', 'type': 'input', 'text': 'State/Province', 'jsonKey': 'state' },
    { id: '3', 'type': 'option', 'text': 'Country', 'jsonKey': 'country', option: ['China', 'Australia', 'America'] },
    { id: '4', 'type': 'input', 'text': 'Phone', 'jsonKey': 'phone' },
    { id: '5', 'type': 'input', 'text': 'Email', 'jsonKey': 'email' },
    { id: '6', 'type': 'input', 'text': 'Lead Status', 'jsonKey': 'leadStatus' },
    { id: '7', 'type': 'input', 'text': 'Created Date', 'jsonKey': 'createdDate' },
    { id: '8', 'type': 'option', 'text': 'Account Manager', 'jsonKey': 'accountManager' },
    { id: '9', 'type': 'input', 'text': 'Lead Type', 'jsonKey': 'leadType' },
    { id: '10', 'type': 'input', 'text': 'Agent', 'jsonKey': 'agent' },
    { id: '11', 'type': 'input', 'text': 'Created By', 'jsonKey': 'createdBy' },
    { id: '12', 'type': 'input', 'text': 'Live Suffix', 'jsonKey': 'liveSuffix' },
    { id: '13', 'type': 'input', 'text': 'Demo Suffix', 'jsonKey': 'demoSuffix' },
    { id: '14', 'type': 'input', 'text': 'Gauge', 'jsonKey': 'gauge' }
  ];
  Json = [
    {
      'leadid': '11111111111',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '22222',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      'leadid': '88888888',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000000',
      'email': 'jimmy@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '1234',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    }
  ];

  viewLists = [
    { id: '111111', text: 'My View' },
    { id: '22222222', text: 'My Account' },
    { id: '3333333', text: 'My View2' }
  ];



  viewId = '3333333';
  fieldIndex;

  changeView() {
    console.log(this.viewId);
  }
  constructor() { }

  ngOnInit() {
  }

}
