import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leads-page-layout-assignment-callback',
  templateUrl: './leads-page-layout-assignment-callback.component.html',
  styleUrls: ['./leads-page-layout-assignment-callback.component.css']
})
export class LeadsPageLayoutAssignmentCallbackComponent implements OnInit {
  @Input() json;
  @Output() pickValue = new EventEmitter();

  pageLayouts = ['Company Administration', 'Sales Administration', 'Operation Admanistration'];

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
