import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-merge-leads',
  templateUrl: './merge-leads.component.html',
  styleUrls: ['./merge-leads.component.css']
})
export class MergeLeadsComponent implements OnInit {
  fields = [
    { name: 'state', id: '2', radio: true, 'text': 'State/Province', 'jsonKey': 'state' },
    { name: 'country', id: '3', radio: true, 'text': 'Country', 'jsonKey': 'country' },
    { name: 'phone', id: '4', radio: true, 'text': 'Phone', 'jsonKey': 'phone' },
    { name: 'email', id: '5', radio: true, 'text': 'Email', 'jsonKey': 'email' },
    { name: 'lead', id: '6', radio: true, 'text': 'Lead Status', 'jsonKey': 'leadStatus' },
    { name: 'createdata', id: '7', radio: false, 'text': 'Created Date', 'jsonKey': 'createdDate' },
    { name: 'accountmanager', id: '8', radio: true, 'text': 'Account Manager', 'jsonKey': 'accountManager' },
    { name: 'leadtype', id: '9', radio: true, 'text': 'Lead Type', 'jsonKey': 'leadType' },
    { name: 'agent', id: '10', radio: true, 'text': 'Agent', 'jsonKey': 'agent' },
    { name: 'creatby', id: '11', radio: false, 'text': 'Created By', 'jsonKey': 'createdBy' },
    { name: 'livesuffix', id: '12', radio: true, 'text': 'Live Suffix', 'jsonKey': 'liveSuffix' },
    { name: 'demosuffix', id: '13', radio: true, 'text': 'Demo Suffix', 'jsonKey': 'demoSuffix' },
    { name: 'gauge', id: '14', radio: true, 'text': 'Gauge', 'jsonKey': 'gauge' }
  ];
  Json = [
    {
      id: '123456',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405000100',
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
      id: '456789',
      'name': 'Winson',
      'state': 'NSW',
      'country': 'Australia',
      'phone': '0405060000',
      'email': 'winson@acy.com',
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
      id: '852369',
      'name': 'Will',
      'state': 'Sydeny',
      'country': 'China',
      'phone': '0405000090',
      'email': 'will@acy.com',
      'leadStatus': 'Unqualified',
      'createdDate': '12/09/2017',
      'accountManager': 'Renee',
      'leadType': 'Live Application',
      'agent': '2578',
      'createdBy': 'Operator',
      'liveSuffix': '5823',
      'demoSuffix': '5785',
      'gauge': 'Medium'
    },
    {
      id: '785214',
      'name': 'Jimmy',
      'state': 'Sydeny',
      'country': 'Australia',
      'phone': '0405010000',
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
  alert = false;
  masterRecord = -1;
  mergeResult = {};

  merge() {
    if (this.masterRecord === -1) {
      this.alert = true;
      return;
    }
    this.fields.forEach(element => {
      if (element.radio === false) {
        const key = element.name;
        const value = this.Json[this.masterRecord][element.jsonKey];
        this.mergeResult[key] = value;
      }
    });
    const resultLength = Object.keys(this.mergeResult).length;
    if (resultLength < this.fields.length) {
      this.alert = true;
      return;
    }
    this.alert = false;
    this.Json.forEach(element => {
      console.log(element.id);
    });
    console.log(this.mergeResult);
    window.history.back();
  }

  compare() {
    this.fields.forEach(element => {
      const checkValue = this.Json[0][element.jsonKey];
      let equals = true;
      for (let i = 1; i < this.Json.length; i++) {
        if (checkValue !== this.Json[i][element.jsonKey]) {
          equals = false;
        }
      }
      if (equals === true) {
        this.mergeResult[element.name] = checkValue;
      }
    });
  }

  constructor() {
    this.compare();

  }

  ngOnInit() {
  }

}
