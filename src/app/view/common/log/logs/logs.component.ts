import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs = [
    {
      date: '23-07-2017 4:37 PM',
      user: 'Operation',
      action: 'Deleted Tasks'
    },
    {
      date: '22-07-2017 4:37 PM',
      user: 'Michael',
      action: 'Deleted Email'
    },
    {
      date: '21-07-2017 4:37 PM',
      user: 'Operation',
      action: 'Deleted attachment'
    },
    {
      date: '20-07-2017 4:37 PM',
      user: 'Operation',
      action: 'Modified Description'
    },
    {
      date: '19-07-2017 4:37 PM',
      user: 'Cloudhub',
      action: 'Modified Team'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
