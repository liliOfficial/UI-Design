import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-department-callback',
  templateUrl: './department-callback.component.html',
  styleUrls: ['./department-callback.component.css']
})
export class DepartmentCallbackComponent implements OnInit {
  @Input() json;
  @Output() pickValue = new EventEmitter();
  @Output() clickValue = new EventEmitter();


  choose(value) {
    this.pickValue.emit(value);
  }

  click(value) {
    this.clickValue.emit(value);
  }

  pickValueChange(value) {
    this.pickValue.emit(value);
  }

  clickValueChange(value) {
    this.clickValue.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
