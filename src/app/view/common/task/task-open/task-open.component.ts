import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.task-open',
  templateUrl: './task-open.component.html',
  styleUrls: ['./task-open.component.css']
})
export class TaskOpenComponent implements OnInit {
  tasks = [
    {
      'subject': 'Live Application Approved',
      'status': 'Completed',
      'dueDate': '17-02-28',
      'dueTime': '8:00 AM',
      'lastModified': '17-09-2017 13:43:38'
    },
    {
      'subject': 'Demo Account',
      'status': 'No Answer',
      'dueDate': '16-02-28',
      'dueTime': '6:30 PM',
      'lastModified': '16-09-2017 13:43:38'
    },
    {
      'subject': 'Demo Account - 2',
      'status': 'Left Message',
      'dueDate': '15-02-28',
      'dueTime': '8:00 AM',
      'lastModified': '15-09-2017 13:43:38'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
