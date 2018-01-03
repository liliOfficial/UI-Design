import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  edit = false;
  lists = [
    {
      'id': 1,
      'label': 'Name',
      'content': { 'type': 'text', 'text': 'Jimmy' },
      'required': 'true'
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
    }
  ];
  addno = -1;
  addJson = null;
  addAfter = -1;

  findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] == value) {
        const obj = { 'no': i, 'json': array[i] }
        return obj;
      }
    }
    return null;
  }
  mouseDown(e) {
    
    this.edit = true;
    const obj = this.findObjectByKey(this.lists, 'id', e.target.id);
    if (obj) {
      this.addno = obj.no;
      this.addJson = obj.json;
    }
    console.log(this.addno, this.addJson);
  }
  mouseUp(e) {
    e.preventDefault();
    this.edit = false;
    if (e.target.id && this.addno != -1) {
      const obj = this.findObjectByKey(this.lists, 'id', e.target.id);
      this.addAfter = obj.no;
      console.log(this.addAfter);
      this.lists.splice(this.addno, 1);
      this.lists.splice(this.addAfter, 0, this.addJson);
    }
    this.addno = -1;
    this.addJson = null;
    this.addAfter = -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
