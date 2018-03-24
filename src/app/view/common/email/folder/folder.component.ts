import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  currentFolders = 'My Folders';
  folders = {
    self: [
      {
        name: 'Private Template',
        Templates: '',
        shared: true
      },
      {
        name: 'Shared Folder',
        Templates: '',
        shared: true
      },
      {
        name: 'Genaral Folder',
        Templates: '',
        shared: false
      },
      {
        name: 'Private Folder',
        Templates: '',
        shared: false
      },
      {
        name: 'Sales Team',
        Templates: '',
        shared: true
      },
      {
        name: 'Market Team',
        Templates: '',
        shared: true
      },
      {
        name: 'Personal 1',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 2',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 3',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 4',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 5',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 6',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 7',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 8',
        Templates: '',
        shared: false
      },
      {
        name: 'Personal 9',
        Templates: '',
        shared: false
      }
    ],
    shared: [
      {
        name: 'Shared Folder',
        by: 'user1'
      },
      {
        name: 'shared2',
        by: 'user2'
      },
      {
        name: 'shared3',
        by: 'user3'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
