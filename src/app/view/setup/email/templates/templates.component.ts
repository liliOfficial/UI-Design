import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {
  activeFolder = 'Private Template';
  currentFolders = 'Jimmy';
  userDepartment = 'User in the Department';

  departmentUsers;
  filteredUsers;
  userKeyword;
  departmentShow = true;

  userList = {
    '0': ['lili', 'Ronan'],
    '1': ['Jimmy', 'Winson'],
    '2': ['Jimmy', 'Winson'],
    '3': ['Will', 'Winson'],
    '4': ['Will', 'Jimmy'],
    '5': ['Reena', 'Winson'],
    '6': ['Will', 'Winson'],
    '7': ['Ginny', 'Jimmy', 'Winson'],
    '8': ['Will', 'Winson'],
    '9': ['Ginny', 'Winson'],
    '10': ['Will', 'Winson']
  };

  folderList = {
    'lili': {
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
    },
    'Ronan': {
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
    },
    'Jimmy': {
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
    },
    'Winson': {
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
    },
    'Will': {
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
    },
    'Ginny': {
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
    },
    'Reena': {
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
    }
  };

  folders = this.folderList[this.currentFolders];

  showTeamUser(value) {
    this.userDepartment = value.name;
    this.departmentUsers = this.userList[value.id];
    this.filteredUsers = this.departmentUsers;
  }

  userFilter() {
    this.filteredUsers = this.departmentUsers.filter(element => element.toLowerCase().includes(this.userKeyword.toLowerCase()));
  }

  showFolder(key) {
    this.currentFolders = key;
    this.folders = this.folderList[key];
  }

  constructor() { }

  ngOnInit() {
  }

}
