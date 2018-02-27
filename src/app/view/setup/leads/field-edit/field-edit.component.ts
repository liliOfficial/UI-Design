import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-edit',
  templateUrl: './field-edit.component.html',
  styleUrls: ['./field-edit.component.css']
})
export class FieldEditComponent implements OnInit {
  warning = false;
  newValue: string;
  activeValues = [
    { id: 1, value: 'Jimmy Ye' },
    { id: 2, value: 'Ginney Yang' },
    { id: 3, value: 'Leon Li' },
    { id: 4, value: 'Summer Xia' },
    { id: 5, value: 'Winson Cao' },
  ];
  deactiveValues = [
    { id: 6, value: 'Jimmy Ye' },
    { id: 7, value: 'Ginney Yang' }
  ];
  noneValues = { value: '-- None --' };

  replaceValues = [];

  addValue(value) {
    const id = this.activeValues.length + 1;
    const obj = { id: id, value: value };
    this.activeValues.push(obj);
    this.newValue = '';
  }
  deleteValue(id) {
    this.warning = true;
    this.replaceValues = this.activeValues.filter(element => element.id !== id);
    this.replaceValues.push(this.noneValues);
  }

  closeWarning() {
    this.replaceValues = [];
    this.warning = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
