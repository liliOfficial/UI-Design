import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-email-template',
  templateUrl: './my-email-template.component.html',
  styleUrls: ['./my-email-template.component.css']
})
export class MyEmailTemplateComponent implements OnInit {

  constructor() { }
  importPopup = false;

  fieldInformation = ['Leads', 'Accounts', 'Opportunities'];
  selectField = ['First Name', 'Last Name', 'Contact Number', 'Adress', 'Age'];
  fieldValue = ['{!first_name}', '{!Last_name}'];

  ngOnInit() {
  }

}
