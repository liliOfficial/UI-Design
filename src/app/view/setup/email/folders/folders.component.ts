import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  @Input('currentFolders') currentFolders;
  @Input('folders') folders;

  folderType = 'self';
  activeTab = 'templates';
  myFolders;
  editMethod = false;

  dragMethod = false;
  dragIndex;
  dragFolder;


  editFolder() {
    this.editMethod = true;
    this.myFolders = this.folders.self;
    this.myFolders.forEach(element => {
      element.disabled = true;
    });
  }

  newFolder() {
    const folder = { name: '', disabled: false };
    this.myFolders.push(folder);
  }

  deleteFolder(i) {
    this.myFolders.splice(i, 1);
  }

  // DRAG AND DROP
  mouseDown(i) {
    this.dragMethod = true;
    this.dragIndex = i;
    this.dragFolder = this.myFolders[i].name;
  }

  mouseUp(i) {
    if (this.dragMethod) {
      const dragFolder = this.myFolders[this.dragIndex];
      this.myFolders.splice(this.dragIndex, 1);
      this.myFolders.splice(i, 0, dragFolder);
      this.dragMethod = false;
    }
  }

  mouseMove(e) {
    if (this.dragMethod) {
      document.getElementById('drag-folder').style.top = (e.screenY - 60) + 'px';
      document.getElementById('drag-folder').style.left = (e.screenX + 15) + 'px';
      e.preventDefault();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
