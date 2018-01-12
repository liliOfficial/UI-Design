import { Component, OnInit } from '@angular/core';

@Component({

  selector: '.attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css']
})
export class AttachmentsComponent implements OnInit {
  attachments = [
    {
      title: 'Photo Id',
      type: 'ID',
      url: 'https://s14.favim.com/mini/170430/bg-cute-iphone-moomin-Favim.com-5167794.jpeg',
      uploadedDate: '29/07/2017 4:28 PM',
      createdBy: 'Operation'
    },
    {
      title: 'Photo Id',
      type: 'ID',
      url: 'https://s14.favim.com/mini/170430/bg-cute-iphone-moomin-Favim.com-5167794.jpeg',
      uploadedDate: '29/07/2017 4:28 PM',
      createdBy: 'Operation'
    },
  ];
  types = ['ID', 'POA', 'Bank Statement', 'Divers License', 'Company Registration Certification'];
  constructor() { }

  ngOnInit() {
  }

}
