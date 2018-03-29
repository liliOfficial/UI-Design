import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {
  campaigns = [
    {
      id: 1231,
      name: '2018 Lottery',
      subscriber: '2018 Lottery',
      type: 'Advertisement',
      createdDate: '28-02-2018',
      startDate: '28/02/2018',
      endDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      status: 'Open',
      description: 'Live account'
    },
    {
      id: 1239,
      name: 'Demo Account',
      subscriber: 'Live',
      type: 'Annoucement',
      createdDate: '28-02-2018',
      startDate: '28/02/2018',
      endDate: '28/02/2018',
      createdBy: 'Jimmy Ye',
      status: 'Closed',
      description: 'Demo account'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
