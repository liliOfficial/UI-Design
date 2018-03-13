import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  convert = false;

  opportunityTypes = ['Initial Account', 'Additional Account', 'Agent Account',
    'MAM Account', 'Anonymous Account', 'VPS Service', 'Other Services'];

  accountNumber = '123456';
  Password = '456789';

  cancel() {
    window.history.back();
  }
  constructor() {

  }

  ngOnInit() {
  }

}
