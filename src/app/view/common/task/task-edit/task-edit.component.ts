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
    { text: '咨询代理' }
  ];

  assign;

  task = {
    assign: '',
    status: '',
    subject: '',
    priority: '',
    dueDate: '',
    reminder: '',
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
    console.log(this.task);
  }


  constructor() { }

  ngOnInit() {
  }

}
