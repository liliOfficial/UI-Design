import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  uploadPopup = false;
  uploadFile;
  details = [
    {
      label: 'Organisation Name',
      value: 'ACY Capital Pty Ltd'
    },
    {
      label: 'phone',
      value: '0205000000'
    },
    {
      label: 'Fax',
      value: '0205000000'
    },
    {
      label: 'Address',
      value: '12 Help Street, Chatswood, NSW'
    },
    {
      label: 'Country',
      value: 'Australia'
    },
    {
      label: 'Fiscal Year Starts',
      value: '2011'
    },
    {
      label: 'Default Time Zone',
      value: '(GMT+11:00) Australian Eastern Daylight ....',
      options: ['(GMT+11:00) Australian Eastern Daylight ....', '(GMT+11:00) Australian Eastern Daylight ....']
    },
    {
      label: 'Used Data Space',
      value: '2.00 GB'
    },
    {
      label: 'File Storage',
      value: '35.21 GB'
    },
    {
      label: 'Last Modified By',
      value: 'Jimmy Ye , 28/07/2015 10:33 AM'
    },
    {
      label: 'Default Language',
      value: 'Chinese'
    }
  ];

  edit(i) {
    this.details.forEach(element => {
      element['edit'] = false;
    });
    this.details[i]['edit'] = true;
  }

  uploadLogo(file) {
    this.uploadFile = file.target.files[0];
    const fr = new FileReader();
    fr.onload = function () {
      document.getElementById('uploadlogo').getElementsByTagName('img')[0].src = fr.result;
    };
    fr.readAsDataURL(this.uploadFile);
  }

  saveLogo() {
    if (this.uploadFile) {
      const fr = new FileReader();
      fr.onload = function () {
        document.getElementById('currentlogo').getElementsByTagName('img')[0].src = fr.result;
      };
      fr.readAsDataURL(this.uploadFile);
      this.uploadPopup = false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
