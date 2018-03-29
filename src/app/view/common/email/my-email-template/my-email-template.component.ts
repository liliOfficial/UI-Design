import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-email-template',
  templateUrl: './my-email-template.component.html',
  styleUrls: ['./my-email-template.component.css']
})
export class MyEmailTemplateComponent implements OnInit {

  constructor() { }
  importPopup = false;
  attachmentPopup = false;
  attachmentType = 'cloud';
  folderSelected = 'My Folder';

  fieldInformation = ['Leads', 'Accounts', 'Opportunities'];
  selectField = ['First Name', 'Last Name', 'Contact Number', 'Adress', 'Age'];
  fieldValue = ['{!first_name}', '{!Last_name}'];

  folders = ['My Folder', 'Company Folder', 'Company Folder1', 'Company Folder2'];

  files = {
    'Company Folder': [
      {
        name: '论金杂志',
        type: 'PDF',
        uploadedDate: '29/07/2017',
        createdBy: 'Operation',
        description: '论金杂志'
      },
      {
        name: '8天交易达人',
        type: 'JPG',
        uploadedDate: '29/07/2017',
        createdBy: 'Michael Qu',
        description: 'Sketch is a design toolkit built to help you create your best work — from your earliest ideas, through to final artwork.'
      },
    ],
    'My Folder': [
      {
        name: 'My File',
        type: 'PDF',
        uploadedDate: '29/07/2017',
        createdBy: 'me',
        description: 'Local attachment'
      },
      {
        name: 'My File',
        type: 'JPG',
        uploadedDate: '29/07/2017',
        createdBy: 'me',
        description: 'Local attachment'
      },
    ]


  };

  ngOnInit() {
  }

}
