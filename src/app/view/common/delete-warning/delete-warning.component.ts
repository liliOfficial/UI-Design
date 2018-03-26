import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.css']
})
export class DeleteWarningComponent implements OnInit {
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  warning=false
  
  close() {
    this.cancel.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
