import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
  paginationTextShow = true;
  popupShow = false;
  sortBy = 'Name';
  sortDecrease = true;
  selectedNo = 0;
  selectedAll = false;

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
      'leadid': '1111',
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
      'leadid': '1113',
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
      'leadid': '1114',
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
      'leadid': '1115',
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
      'leadid': '1116',
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
      'leadid': '1117',
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
      'leadid': '1118',
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
      'leadid': '1119',
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
      'leadid': '1120',
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
      'leadid': '1121',
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
      'leadid': '1122',
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
      'leadid': '1123',
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
      'leadid': '1124',
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
      'leadid': '1125',
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
      'leadid': '1126',
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
      'leadid': '1127',
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
      'leadid': '1128',
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
      'leadid': '1129',
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
      'leadid': '1130',
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
      'leadid': '1131',
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
      'leadid': '1132',
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
      'leadid': '1133',
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
      'leadid': '1134',
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
      'leadid': '1135',
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
      'leadid': '1136',
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
      'leadid': '1137',
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
      'leadid': '1138',
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
      'leadid': '1139',
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
      'leadid': '1140',
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
      'leadid': '1141',
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
      'leadid': '1142',
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
      'leadid': '1143',
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

  // Pagination
  currentPage = 3;
  totalPage = 12;
  startNo = 1;
  endNo = 32;
  totalNo = 567;
  perPage = 100;
  pageOption = [25, 50, 100, 200, 300];
  pageNos;

  chooseUser() {
    this.selectedNo = 0;
    this.Json.map(element => {
      if (element['checked'] === true) {
        this.selectedNo++;
      }
    });
    if (this.selectedNo === this.Json.length) {
      this.selectedAll = true;
    } else {
      this.selectedAll = false;
    }
  }

  selectAll() {
    if (this.selectedAll === true) {
      this.Json.forEach(element => element['checked'] = true);
      this.selectedNo = this.Json.length;
    } else {
      this.Json.forEach(element => element['checked'] = false);
      this.selectedNo = 0;
    }
  }

  sort(text) {
    if (this.sortBy === text) {
      this.sortDecrease = !this.sortDecrease;
    }
    this.sortBy = text;
  }

  changeView() {
    console.log(this.viewId);
  }

  // Pagination
  paginationInit(totalPage, currentPage) {
    const pageArr = [];
    if (totalPage <= 5) {
      for (let i = 0; i < totalPage; i++) {
        pageArr.push(i + 1);
      }
    } else if (currentPage < 3) {
      for (let i = 0; i < 5; i++) {
        pageArr.push(i + 1);
      }
    } else if (totalPage - currentPage < 2) {
      for (let i = 0; i < 5; i++) {
        pageArr.push(totalPage - 4 + i);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        pageArr.push(currentPage - 2 + i);
      }
    }
    this.pageNos = pageArr;
    this.currentPage = currentPage;
    this.totalPage = totalPage;
  }


  constructor() {
    this.Json.forEach(element => element['checked'] = false);
    this.paginationInit(12, 3);
  }

  ngOnInit() {
  }

}
