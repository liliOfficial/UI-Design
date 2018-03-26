import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsubscribers',
  templateUrl: './unsubscribers.component.html',
  styleUrls: ['./unsubscribers.component.css']
})
export class UnsubscribersComponent implements OnInit {
  tab = 'search';
  email: string;
  unsubscribers = [
    {
      name: 'Jimmy Ye',
      fromList: 'Demo',
      email: 'jimmy@acy.com',
      type: 'Leads',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Email Opt-Out'
    },
    {
      name: 'Terry',
      fromList: 'Manual',
      email: 'terry@acy.com',
      type: 'Manual',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye'
    },
    {
      name: 'Winson',
      fromList: 'Manual',
      email: 'winson@acy.com',
      type: 'Manual',
      dateCreated: '28/02/2018',
      modifiedDate: '28/02/2018',
      createdBy: 'Jimmy Ye'
    },
  ];

  addEmail() {
    if (this.email) {
      const newSubscriber = {
        name: 'XXX XXX',
        fromList: 'Manual',
        email: '',
        type: 'Manual',
        dateCreated: '',
        modifiedDate: '',
        createdBy: 'Jimmy Ye'
      };

      newSubscriber.email = this.email;

      const today = new Date();
      const d = today.getDay();
      const m = today.getMonth() + 1;
      const yyyy = today.getFullYear();
      let dd, mm;
      if (d < 10) {
        dd = '0' + d.toString();
      }
      if (m < 10) {
        mm = '0' + m.toString();
      }
      const currentDate = dd + '/' + mm + '/' + yyyy;
      newSubscriber.dateCreated = currentDate;
      newSubscriber.modifiedDate = currentDate;
      this.unsubscribers.push(newSubscriber);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
