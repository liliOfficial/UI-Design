import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-new-view',
  templateUrl: './leads-new-view.component.html',
  styleUrls: ['./leads-new-view.component.css']
})
export class LeadsNewViewComponent implements OnInit {
  viewName = '';
  conditions = ['none', 'equals', 'not equal to', 'starts with', 'contains', 'does not contain'];
  allFields = [
    { id: '1', text: 'Name', type: 'text' },
    {
      id: '2',
      text: 'Salutation',
      type: 'pickList',
      option: ['Mr.', 'Ms.', 'Mrs', 'Dr.', 'Prof.']

    },
    { id: '3', text: 'Last Name', type: 'text' },
    { id: '4', text: 'First Name', type: 'text' },
    { id: '5', text: 'Lead Recoard Type', type: 'text' },
    {
      id: '6',
      text: 'Country',
      type: 'pickList',
      option: ['China', 'Australia', 'America']
    }
  ];

  availableFields = [
    { id: '1', text: 'Name' },
    {
      id: '2',
      text: 'Salutation',
      option: ['Mr.', 'Ms.', 'Mrs', 'Dr.', 'Prof.']

    },
    { id: '3', text: 'Last Name' },
    { id: '4', text: 'First Name' },
    { id: '5', text: 'Lead Recoard Type' }
  ];

  filters = [{ index: '0', field: '2', condition: 'equals', value: 'Mr.,Ms.,aaaaa' }];
  selectedFields = [];

  // Function Initial Variable
  sidebarShow = false;
  pickList = [];
  selectedValue = [];
  pickHeader = '';
  pickListIndex;

  activeOption = -1;

  addno = -1;
  addJson = null;
  addAfter = -1;

  findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] == value) {
        const obj = { 'no': i, 'json': array[i] };
        return obj;
      }
    }
    return null;
  }

  // Filter Option
  addFilter() {
    const newFilter = { index: '', field: '', condition: '', value: '' };
    newFilter.index = this.filters.length.toString();
    this.filters.push(newFilter);
  }

  deleteFilter(i) {
    this.filters.splice(i, 1);
  }

  valueType(id) {
    for (let i = 0; i < this.allFields.length; i++) {
      if (this.allFields[i]['id'] === id) {
        const type = this.allFields[i].type;
        return type;
      }
    }
    return 'text';
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
      // const exist = this.selectedValue.indexOf(element);
      // if (exist === -1) {
      //   this.pickList.push({ option: element, selected: false });
      // } else {
      //   this.pickList.push({ option: element, selected: true });
      // }
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
    console.log(selectString);
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

  // Selete Fields Section

  addField() {
    const obj = this.findObjectByKey(this.availableFields, 'id', this.activeOption);
    if (obj) {
      this.availableFields.splice(obj.no, 1);
      this.selectedFields.push(obj.json);
    }
  }

  removeField() {
    const obj = this.findObjectByKey(this.selectedFields, 'id', this.activeOption);
    if (obj) {
      this.selectedFields.splice(obj.no, 1);
      this.availableFields.push(obj.json);
    }
  }

  mouseDown(e) {
    e.preventDefault();
    this.activeOption = e.target.id;
    const obj = this.findObjectByKey(this.selectedFields, 'id', this.activeOption);
    if (obj) {
      this.addno = obj.no;
      this.addJson = obj.json;
      document.getElementById('drag-item-text').innerHTML = obj.json.text;
      document.getElementById('drag-item').style.display = 'block';
    }
  }

  mouseMove(e) {
    document.getElementById('drag-item').style.top = (e.layerY + 30) + 'px';
    document.getElementById('drag-item').style.left = (e.layerX + 20) + 'px';
  }

  mouseUp(e) {
    e.preventDefault();
    this.addAfter = e.target.id;
    const obj = this.findObjectByKey(this.selectedFields, 'id', this.addAfter);
    document.getElementById('drag-item').style.display = 'none';
    if (obj && this.addno != -1) {
      this.addAfter = obj.no;
      this.selectedFields.splice(this.addno, 1);
      this.selectedFields.splice(this.addAfter, 0, this.addJson);
    }
    this.addno = -1;
    this.addJson = null;
    this.addAfter = -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
