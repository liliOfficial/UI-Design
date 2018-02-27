import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leads-new-view',
  templateUrl: './leads-new-view.component.html',
  styleUrls: ['./leads-new-view.component.css']
})
export class LeadsNewViewComponent implements OnInit {
  viewName: string;
  filterLogix: string;
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

  users = [
    { id: '1', name: 'Jimmy', share: true },
    { id: '2', name: 'Will', share: false },
    { id: '3', name: 'Ginney', share: false },
    { id: '4', name: 'Lily', share: false }
  ];

  sharedUser = [];
  sharedTeam = ['Company Administrator'];

  userList = {
    '0': ['lili', 'Ronan'],
    '1': ['Jimmy', 'Winson'],
    '2': ['Jimmy', 'Winson'],
    '3': ['Will', 'Winson'],
    '4': ['Will', 'Jimmy'],
    '5': ['Reena', 'Winson'],
    '6': ['Will', 'Winson'],
    '7': ['Ginny', 'Jimmy', 'Winson'],
    '8': ['Will', 'Winson'],
    '9': ['Ginny', 'Winson'],
    '10': ['Will', 'Winson']
  };

  // Function Initial Variable
  sidebarShow = false;
  userPopup = false;
  teamPopup = false;
  viewId: number;
  sub: any;
  pickList = [];
  selectedValue = [];
  pickHeader = '';
  pickListIndex;
  userDepartment = 'Click Chart to Choose Department';
  departmentUsers;
  filteredUsers;
  userKeyword;

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
    if (obj && this.addno !== -1) {
      this.addAfter = obj.no;
      this.selectedFields.splice(this.addno, 1);
      this.selectedFields.splice(this.addAfter, 0, this.addJson);
    }
    this.addno = -1;
    this.addJson = null;
    this.addAfter = -1;
  }

  submit() {
    const result = { viewName: '', filter: [], filterLogix: '', selectedFields: [] };
    result.viewName = this.viewName;
    result.filter = this.filters;
    result.filterLogix = this.filterLogix;
    result.selectedFields = this.selectedFields;
    console.log(result);
    console.log(this.viewId);
    console.log(this.sharedUser);
    console.log(this.sharedTeam);
  }

  // Restrict Visibility
  shareToUser() {
    this.sharedUser = [];
    this.users.forEach(element => {
      if (element.share === true) {
        this.sharedUser.push(element);
      }
    });
    this.userPopup = false;
  }

  removeUser(id) {
    this.sharedUser.forEach((element, index) => {
      if (element.id === id) {
        this.sharedUser.splice(index, 1);
      }
    });
    this.users.forEach(element => {
      if (element.id === id) {
        element.share = false;
      }
    });
  }

  chooseDepartment(value) {
    this.sharedTeam.push(value);
  }

  removeTeam(index) {
    this.sharedTeam.splice(index, 1);
  }

  showTeamUser(value) {
    this.userDepartment = value.name;
    this.departmentUsers = this.userList[value.id];
    this.filteredUsers = this.departmentUsers;
  }

  addUser(user) {
    const pushUser = { id: this.users.length, name: user, share: true };
    this.sharedUser.push(pushUser);
  }

  userFilter() {
    this.filteredUsers = this.departmentUsers.filter(element => element.toLowerCase().includes(this.userKeyword.toLowerCase()));
  }

  constructor(private route: ActivatedRoute) {
    this.shareToUser();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.viewId = + params['id'];
    });
  }

}
