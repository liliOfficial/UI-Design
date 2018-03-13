import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-new',
  templateUrl: './field-new.component.html',
  styleUrls: ['./field-new.component.css']
})
export class FieldNewComponent implements OnInit {
  dataType;
  allLayout = false;
  allSelected = false;
  nextStep = false;
  newValue: string;

  dataTypes = [
    { label: 'Picklist', description: 'Field allows to be picked in selected value' },
    { label: 'Text', description: 'Fields to be in form of letters and numbers' },
    { label: 'Email', description: 'Automatically detects email format' },
    { label: 'Date/Time', description: 'Date within accordance with country format, time is in 24 hours' },
    { label: 'Date', description: 'Date within accordance with country format' },
    { label: 'Numbers', description: 'Field to be in form of numbers' },
    { label: 'Lone Text', description: 'Field for description' },

  ];

  picklistValue = ['Jimmy', 'Will', 'Ginney'];

  pageLayouts = [
    {
      text: 'Company Administrator', chosen: false,
      departments: ['Company Administrator', 'Sales Administrator']
    },
    {
      text: 'Operation Administrator', chosen: false,
      departments: ['Company Administrator', 'Sales Administrator']
    },
    {
      text: 'Sales', chosen: false,
      departments: ['Company Administrator', 'Sales Administrator', 'Orginazation']
    },
    {
      text: 'Finance Administrator', chosen: false,
      departments: ['Company Administrator', 'Sales Administrator']
    },
    {
      text: 'Marketing', chosen: false,
      departments: ['Company Administrator', 'Sales Administrator']
    },
  ];

  step2() {
    this.nextStep = true;
    console.log(this.dataType);
  }

  alwaysRequire() {
    if (this.allLayout === true) {
      this.pageLayouts.forEach(element => element.chosen = true);
    }
  }

  selectAll() {
    if (this.allSelected === false) {
      this.pageLayouts.forEach(element => element.chosen = false);
    }
    if (this.allSelected === true) {
      this.pageLayouts.forEach(element => element.chosen = true);
    }
  }

  addValue(value) {
    this.picklistValue.push(value);
    this.newValue = '';
  }

  deleteValue(i) {
    this.picklistValue.splice(i, 1);
  }

  goBack() {
    window.history.back();
  }
  constructor() { }

  ngOnInit() {
  }

}
