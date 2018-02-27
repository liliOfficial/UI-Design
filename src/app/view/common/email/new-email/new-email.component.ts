import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-email',
  templateUrl: './new-email.component.html',
  styleUrls: ['./new-email.component.css']
})
export class NewEmailComponent implements OnInit {
  attachments: any;

  attach(e) {
    const files = [].slice.call(e.target.files);
    this.attachments = files.map(f => f.name);
    console.log(files);
  }

  deleteAttachment(i) {
    this.attachments.splice(i, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
