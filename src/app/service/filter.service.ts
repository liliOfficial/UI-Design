import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  sidebarShow = false;
  filterLogix: string;
  pickList = [];
  selectedValue = [];
  pickHeader = '';
  pickListIndex;

  conditions = ['none', 'equals', 'not equal to', 'starts with', 'contains', 'does not contain'];
  allFields = [
    { id: 1, text: 'Name', type: 'text' },
    {
      id: 2,
      text: 'Salutation',
      type: 'pickList',
      option: ['Mr.', 'Ms.', 'Mrs', 'Dr.', 'Prof.']

    },
    { id: 3, text: 'Last Name', type: 'text' },
    { id: 4, text: 'First Name', type: 'text' },
    { id: 5, text: 'Lead Recoard Type', type: 'text' },
    {
      id: 6,
      text: 'Country',
      type: 'pickList',
      option: ['China', 'Australia', 'America']
    }
  ];

  filters = [{ index: 0, field: 2, condition: 'equals', value: 'Mr.,Ms.,aaaaa' }];

  addFilter() {
    const newFilter = { index: 0, field: -1, condition: '', value: '' };
    const length = this.filters.length - 1;
    newFilter.index = this.filters[length].index + 1;
    this.filters.push(newFilter);
  }

  deleteFilter(i) {
    this.filters.splice(i, 1);
  }

  valueType(id) {
    let type = 'text';
    this.allFields.forEach(element => {
      if (element['id'] === id) {
        type = element.type;
      }
    });
    return type;
  }

  findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] == value) {
        const obj = { 'no': i, 'json': array[i] };
        return obj;
      }
    }
    return null;
  }

  clearFilterValue(no) {
    this.filters.forEach(element => {
      if (element.index === no) {
        element.value = '';
      }
    });
  }

  // Pick List Option
  changeSelected(filter) {
    if (filter.value) {
      this.selectedValue = filter.value.split(',');
    } else {
      this.selectedValue = [];
    }
  }
  openPickList(no, id, value) {
    this.pickList = [];
    this.pickListIndex = no;
    if (value) {
      this.selectedValue = value.split(',');
    } else {
      this.selectedValue = [];
    }
    const obj = this.findObjectByKey(this.allFields, 'id', id);
    const field = obj.json;
    this.pickHeader = field.text;
    const allList = field.option;
    // checked the exist value
    allList.forEach(element => {
      this.pickList.push({ option: element, selected: false });
    });
  }
  showPickList() {
    this.sidebarShow = true;
  }
  submitPickList() {
    // check the selected List
    const selectList = [];
    for (let i = 0; i < this.pickList.length; i++) {
      if (this.pickList[i].selected) {
        selectList.push(this.pickList[i].option);
      }
    }

    // compare select list and selected value, add new option to selected value
    selectList.forEach(element => {
      const exist = this.selectedValue.indexOf(element);
      if (exist === -1) {
        this.selectedValue.push(element);
      }
    });

    const selectString = this.selectedValue.toString();
    this.filters.forEach(element => {
      if (element.index === this.pickListIndex) {
        element.value = selectString;
      }
    });
    this.sidebarShow = false;
  }
  closePickList() {
    this.sidebarShow = false;
    this.pickHeader = '';
    this.pickList = [];
  }
  constructor() { }

}
