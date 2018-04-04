import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-dashboard',
  templateUrl: './new-dashboard.component.html',
  styleUrls: ['./new-dashboard.component.css']
})
export class NewDashboardComponent implements OnInit {
  sideNav = 'type';
  reportType = 'my';
  myReport = [];

  table1Header = 'Click to Edit Name';
  table1Footer = 'Click Here to Edit Footer';
  constructor() { }

  ngOnInit() {
  }

}
