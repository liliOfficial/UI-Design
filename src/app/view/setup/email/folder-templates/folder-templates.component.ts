import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-folder-templates',
  templateUrl: './folder-templates.component.html',
  styleUrls: ['./folder-templates.component.css']
})
export class FolderTemplatesComponent implements OnInit {
  @Input('folderType') folderType;
  @Input('currentFolders') currentFolders;

  templates = [
    {
      id: 145235,
      name: 'ACY Live Account',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Live account'
    },
    {
      id: 145237,
      name: 'Demo Account',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145258,
      name: 'Market',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145291,
      name: 'Sales',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
    {
      id: 145299,
      name: 'Administrator',
      createdDate: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      description: 'Demo account'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
