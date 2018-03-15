import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'setup-nav',
  templateUrl: './setup-nav.component.html',
  styleUrls: ['./setup-nav.component.css']
})
export class SetupNavComponent implements OnInit {
  active = 'company';

  getURL() {
    const URL = window.location.pathname;
    console.log(URL);

    if (URL.includes('/setup/company')) { this.active = 'company'; }
    if (URL.includes('/setup/leads')) { this.active = 'leads'; }
    if (URL.includes('/setup/accounts')) { this.active = 'accounts'; }
    if (URL.includes('/setup/opportunities')) { this.active = 'opportunities'; }
    if (URL.includes('/setup/email')) { this.active = 'email'; }
    if (URL.includes('/setup/workflow')) { this.active = 'workflow'; }
  }

  constructor() {
    this.getURL();
  }

  ngOnInit() {
  }

}
