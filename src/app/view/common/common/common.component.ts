import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  functions = [
    {
      'title': 'Attachments',
      'button': [
        { 'text': 'Attach File', 'url': '/leads' },
        { 'text': 'Others', 'url': '' }
      ],
      'theaders': [
        { 'text': 'Action', 'jsonKey': 'action' },
        { 'text': 'Title', 'jsonKey': 'title' },
        { 'text': 'Type', 'jsonKey': 'type' },
        { 'text': 'Uploaded Date', 'jsonKey': 'uploadedDate' },
        { 'text': 'Created By', 'jsonKey': 'createdBy' }
      ],
      'jsons': [
        {
          'action': {
            'button': [
              { 'view': 'url' }
            ],
          },
          'title': {
            'image': { 'name': 'Photo Id', 'url': 'https://s14.favim.com/mini/170430/bg-cute-iphone-moomin-Favim.com-5167794.jpeg' }
          },
          'type': {
            'select': {
              'options': ['ID', 'POA', 'Bank Statement', 'Divers License', 'Company Registration Certification'],
              'selected': 'ID'
            }
          },
          'uploadedDate': {
            'text': '29/07/2017 4:38 PM'
          },
          'createdBy': {
            'text': 'Operation'
          },
        },
        {
          'action': {
            'button': [
              { 'view': 'url' }
            ],
          },
          'title': {
            'image': { 'name': 'Photo Id', 'url': 'https://s14.favim.com/mini/170430/bg-cute-iphone-moomin-Favim.com-5167794.jpeg' }
          },
          'type': {
            'select': {
              'options': ['ID', 'POA', 'Bank Statement', 'Divers License', 'Company Registration Certification'],
              'selected': 'ID'
            }
          },
          'uploadedDate': {
            'text': '29/07/2017 4:38 PM'
          },
          'createdBy': {
            'text': 'Operation'
          },
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
