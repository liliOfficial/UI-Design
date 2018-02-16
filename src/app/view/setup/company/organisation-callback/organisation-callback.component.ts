import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-organisation-callback',
  templateUrl: './organisation-callback.component.html',
  styleUrls: ['./organisation-callback.component.css']
})
export class OrganisationCallbackComponent implements OnInit {
  @Input() json;
  @Output() pickValue = new EventEmitter();

  choose(value) {
    this.pickValue.emit(value);
  }

  pickValueChange(value) {
    this.pickValue.emit(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
