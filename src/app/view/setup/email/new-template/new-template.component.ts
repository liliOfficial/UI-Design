import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-template',
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.css']
})
export class NewTemplateComponent implements OnInit {
  importPopup = false;

  fieldInformation = ['Leads', 'Accounts', 'Opportunities'];
  selectField = ['First Name', 'Last Name', 'Contact Number', 'Adress', 'Age'];
  fieldValue = ['{!first_name}', '{!Last_name}'];
  constructor() { }

  ngOnInit() {
  }

}
