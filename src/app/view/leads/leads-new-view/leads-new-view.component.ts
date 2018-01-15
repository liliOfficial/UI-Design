import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-new-view',
  templateUrl: './leads-new-view.component.html',
  styleUrls: ['./leads-new-view.component.css']
})
export class LeadsNewViewComponent implements OnInit {
  filters = [
    { field: '', condition: '', value: '' }
  ];
  newFilter = { field: '', condition: '', value: '' };
  fields = [
    { id: '1', text: 'Name', value: '' },
    { id: '2', text: 'Salutation', option: ['Mr.', 'Ms.', 'Mrs', 'Dr.', 'Prof.'] },
    { id: '3', text: 'Last Name', value: '' },
    { id: '4', text: 'First Name', value: '' },
    { id: '5', text: 'Lead Recoard Type', value: '' }
  ];
  conditions = ['none', 'equals', 'not equal to', 'starts with', 'contains', 'does not contain'];

  activeOption = -1;

  addno = -1;
  addJson = null;
  addAfter = -1;

  availableFields = [
    { id: '1', text: 'Name', value: '' },
    { id: '2', text: 'Salutation', value: '' },
    { id: '3', text: 'Last Name', value: '' },
    { id: '4', text: 'First Name', value: '' },
    { id: '5', text: 'Lead Recoard Type', value: '' }
  ];
  selectedFields = [];

  addFilter() {
    this.filters.push(this.newFilter);
  }

  findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] == value) {
        const obj = { 'no': i, 'json': array[i] }
        return obj;
      }
    }
    return null;
  }

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
