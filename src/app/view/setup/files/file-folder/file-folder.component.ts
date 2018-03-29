import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-folder',
  templateUrl: './file-folder.component.html',
  styleUrls: ['./file-folder.component.css']
})
export class FileFolderComponent implements OnInit {
  attachPopup = false;
  search = false;
  searchResult = false;
  files = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
