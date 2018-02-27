import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'setup-nav',
  templateUrl: './setup-nav.component.html',
  styleUrls: ['./setup-nav.component.css']
})
export class SetupNavComponent implements OnInit {
  active = 'company';

  constructor() { }

  ngOnInit() {
  }

}
