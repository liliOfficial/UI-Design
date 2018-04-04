import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reportOwner = 'my';
  sideNav = 'Report';
  reportType: string;
  newReportPopup = false;
  activeFolder = 'My Report';
  newReportFolderName = '';
  addReportInput = false;

  addDashboardInput = false;
  newDashboardFolderName = '';

  reportFolders = [
    {
      id: 1,
      name: 'report1',
      sharedBy: '',
      shared: true
    },
    {
      id: 2,
      name: 'report2',
      sharedBy: '',
    },
    {
      id: 3,
      name: 'report3',
      sharedBy: '',
      shared: true
    },
    {
      id: 4,
      name: 'report4',
      sharedBy: '',
    },
    {
      id: 5,
      name: 'Company',
      sharedBy: 'Jimmy',
    },
    {
      id: 6,
      name: 'Company2',
      sharedBy: 'Jimmy',
    },
  ];

  reports = [
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Accounts',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Accounts',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Leads',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      type: 'Opportunities',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      type: 'Opportunities',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    }
  ];

  dashboardFolders = [
    {
      id: 1,
      name: 'Dashboard 1',
      sharedBy: '',
      shared: true
    },
    {
      id: 2,
      name: 'Dashboard 2',
      sharedBy: '',
    },
    {
      id: 5,
      name: 'Company Dashboard',
      sharedBy: 'Jimmy',
    },
    {
      id: 3,
      name: 'Dashboard 3',
      sharedBy: '',
      shared: true
    },
    {
      id: 4,
      name: 'Dashboard 4',
      sharedBy: '',
    },
    {
      id: 6,
      name: 'Company Dashboard2',
      sharedBy: 'Jimmy',
    },
  ];

  dashboards = [
    {
      name: 'Commission Dashboard',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Sales Dashboard',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },
    {
      name: 'Total Revenue',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Caroline'
    },
    {
      name: 'Total Sales',
      createdDate: '25/02/2017',
      createdBy: 'Jimmy Ye',
      lastModifiedBy: 'Winson'
    },

  ];

  deleteReportFolder(i) {
    this.reportFolders.splice(i, 1);
  }
  newReportFolder() {
    if (this.newReportFolderName) {
      const folder = { id: 0, name: this.newReportFolderName, sharedBy: '' };
      this.reportFolders.splice(0, 0, folder);
      this.addReportInput = false;
      this.newReportFolderName = '';
    }
  }

  newDashboardFolder() {
    if (this.newDashboardFolderName) {
      const folder = { id: 0, name: this.newDashboardFolderName, sharedBy: '' };
      this.dashboardFolders.splice(0, 0, folder);
      this.addDashboardInput = false;
      this.newDashboardFolderName = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
