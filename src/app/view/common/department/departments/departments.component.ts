import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  @Output() output = new EventEmitter();

  structure = [{
    '1': {
      '2': {
        '5': {
          '10': false
        },
        '6': {
          '7': false
        }
      },
      '3': {
        '8': false,
        '9': false
      },
      '4': false
    }
  }];

  organisation = [
    {
      id: '0',
      name: 'No Department',
    },
    {
      id: '1',
      name: 'Company Administrator',
      children: [
        {
          id: '2',
          name: 'Sales Administrator',
          children: [
            {
              id: '3',
              name: 'Sales Manager',
              children: [
                { id: '4', name: 'Sales' },
              ]
            }
          ]
        },
        {
          id: '5',
          name: 'Operation Administrator',
          children: [
            { id: '6', name: 'Operation Officer' }
          ]
        },
        {
          id: '7',
          name: 'Finance Administrator',
          children: [
            { id: '8', name: 'Finance Officer' }
          ]
        },
        {
          id: '9',
          name: 'Marketing Administrator',
          children: [
            { id: '10', name: 'Marketing Officer' }
          ]
        }
      ]
    }
  ];

  pickValue(value) {
    this.output.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
