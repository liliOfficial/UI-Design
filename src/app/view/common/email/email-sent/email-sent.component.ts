import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.email-sent',
  templateUrl: './email-sent.component.html',
  styleUrls: ['./email-sent.component.css']
})
export class EmailSentComponent implements OnInit {
  emails = [
    {
      subject: 'ACY稀万 - 真实账户开通',
      dateSent: '29-07-2017 4:38 PM',
      dateOpen: '29-07-2017 4:38 PM',
      times: '3',
      lastOpen: '29-07-2017 4:38 PM'
    },
    {
      subject: 'ACY稀万 - 真实账户开通',
      dateSent: '20-07-2017 9:38 PM',
      dateOpen: '20-07-2017 9:38 PM',
      times: '2',
      lastOpen: '20-07-2017 9:38 PM'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
