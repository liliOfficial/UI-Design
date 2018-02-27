import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-page-layout',
  templateUrl: './leads-page-layout.component.html',
  styleUrls: ['./leads-page-layout.component.css']
})
export class LeadsPageLayoutComponent implements OnInit {
  newPopup = false;
  layouts = [
    {
      name: 'Company Administrator',
      createdBy: 'Jimmy Ye, 22-02-2014',
      modifiedBy: 'Admin, 25-02-2014'
    },
    {
      name: 'Company Administrator',
      createdBy: 'Jimmy Ye, 22-02-2014',
      modifiedBy: 'Admin, 25-02-2014'
    },
    {
      name: 'Company Administrator',
      createdBy: 'Jimmy Ye, 22-02-2014',
      modifiedBy: 'Admin, 25-02-2014'
    },
    {
      name: 'Company Administrator',
      createdBy: 'Jimmy Ye, 22-02-2014',
      modifiedBy: 'Admin, 25-02-2014'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
