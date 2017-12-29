import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  options = [
    { 'id': '1', 'content': 'Name' },
    { 'id': '2', 'content': 'Phone' },
    { 'id': '3', 'content': 'Email' },
    { 'id': '4', 'content': 'Lead status' },
    { 'id': '5', 'content': 'Lead Type' },
    { 'id': '6', 'content': 'Created By' },
    { 'id': '7', 'content': 'Last Activity' },
    { 'id': '8', 'content': 'User' },
    { 'id': '9', 'content': 'Account Manager' },
    { 'id': '10', 'content': 'Account Type' },
  ];
  optionList = [
    { 'id': '1', 'content': 'Name' },
    { 'id': '2', 'content': 'Phone' },
    { 'id': '3', 'content': 'Email' },
    { 'id': '4', 'content': 'Lead status' },
    { 'id': '5', 'content': 'Lead Type' },
    { 'id': '6', 'content': 'Created By' },
    { 'id': '7', 'content': 'Last Activity' },
    { 'id': '8', 'content': 'User' },
    { 'id': '9', 'content': 'Account Manager' },
    { 'id': '10', 'content': 'Account Type' },

  ];
  choosens = [
    { 'id': '11', 'content': 'Birthday' }
  ];
  choosenList = [
    { 'id': '11', 'content': 'Birthday' }
  ];

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }

  submit() {
    const choosen = document.getElementById('choosen').children;
    const cho = document.getElementById('some-div').querySelectorAll('*');
    console.log(choosen);
    console.log(this.choosens);
  }

  refresh() {
    this.options = this.optionList;
    this.choosens = this.choosenList;
  }

  constructor() { }

  ngOnInit() {

  }

}
