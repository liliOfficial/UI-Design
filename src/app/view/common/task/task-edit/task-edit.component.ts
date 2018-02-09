import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  assignPopup = false;
  subjectPopup = false;

  assignList = [
    {
      id: '888888',
      fullName: 'Account Manager',
      role: 'Team Leader',
      team: 'ChinaPro',
      workingHour: '09:00 - 18:00 Monday -Friday'
    },
    {
      id: 'id456123',
      fullName: 'Andy Li',
      role: 'Team Leader',
      team: 'ChinaPro',
      workingHour: '09:00 - 18:00 Monday -Friday'
    },
    {
      id: 'id789456',
      fullName: 'Will Bai',
      role: 'Team Member',
      team: 'ChinaPro',
      workingHour: '09:00 - 18:00 Monday -Friday'
    },
  ];
  status = [
    { text: 'Not Started', id: 'id4654' },
    { text: 'Completed', id: 'id4567' },
    { text: 'No Answer', id: 'id1231' },
    { text: 'Left Message', id: 'id7897' },
    { text: 'Wrong Number', id: 'id8521' },
    { text: 'Not Interested', id: 'id9999' }
  ];
  priorities = [
    { text: 'High' },
    { text: 'Normal' },
    { text: 'Low' }
  ];
  subjectList = [
    { text: 'Live Application' },
    { text: 'Demo Application' },
    { text: 'Call 1' },
    { text: '咨询代理', deleteAble: true }
  ];

  assign = 'Default Account Manager';
  alert = false;
  newSubjectName;

  task = {
    assign: '888888',
    status: 'id4654',
    subject: '',
    priority: 'Normal',
    dueDate: '',
    comments: ''
  };

  assignTo(id, value) {
    this.task.assign = id;
    this.assign = value;
    this.assignPopup = false;
  }

  subjectChoose(value) {
    this.task.subject = value;
    this.subjectPopup = false;
  }

  changeComments(e) {
    console.log(e);
  }

  output() {
    if (this.task.assign && this.task.subject && this.task.priority && this.task.dueDate) {
      this.alert = false;
      console.log(this.task);
    } else {
      this.alert = true;
    }
  }

  addSubject() {
    if (this.newSubjectName) {
      const newSubject = { text: '', deleteAble: true };
      newSubject.text = this.newSubjectName;
      this.subjectList.push(newSubject);
      this.newSubjectName = '';
    }
  }

  deleteSubject(i) {
    this.subjectList.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
