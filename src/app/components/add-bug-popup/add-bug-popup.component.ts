import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-bug-popup',
  templateUrl: './add-bug-popup.component.html',
  styleUrls: ['./add-bug-popup.component.css']
})
export class AddBugPopupComponent implements OnInit {

  @Output() closingToggle: EventEmitter<boolean>;

  private errorMessage;

  constructor() {
    this.closingToggle = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

}
