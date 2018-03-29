import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-files',
  templateUrl: './user-files.component.html',
  styleUrls: ['./user-files.component.css']
})
export class UserFilesComponent implements OnInit {
  search= false;
  
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
