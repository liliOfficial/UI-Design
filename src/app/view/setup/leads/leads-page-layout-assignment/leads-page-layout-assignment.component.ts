import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads-page-layout-assignment',
  templateUrl: './leads-page-layout-assignment.component.html',
  styleUrls: ['./leads-page-layout-assignment.component.css']
})
export class LeadsPageLayoutAssignmentComponent implements OnInit {
  organisation = [
    {
      id: '1',
      name: 'Company Administrator',
      pageLayout: 'Company Administration',
      children: [
        {
          id: '2',
          name: 'Sales Administrator',
          pageLayout: 'Company Administration',
          children: [
            {
              id: '3',
              name: 'Sales Manager',
              pageLayout: '',
              children: [
                { id: '4', name: 'Sales' },
              ]
            }
          ]
        },
        {
          id: '5',
          name: 'Operation Administrator',
          pageLayout: 'Company Administration',
          children: [
            { id: '6', name: 'Operation Officer' }
          ]
        },
        {
          id: '7',
          name: 'Finance Administrator',
          pageLayout: 'Company Administration',
          children: [
            { id: '8', name: 'Finance Officer' }
          ]
        },
        {
          id: '9',
          name: 'Marketing Administrator',
          pageLayout: 'Company Administration',
          children: [
            { id: '10', name: 'Marketing Officer', pageLayout: 'Company Administration', }
          ]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
