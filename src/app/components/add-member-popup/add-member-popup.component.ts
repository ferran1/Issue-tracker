import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.css']
})
export class AddMemberPopupComponent implements OnInit {

  @Output() closingToggle: EventEmitter<boolean>;

  private errorMessage;

  constructor() {
    this.closingToggle = new EventEmitter<boolean>();
  }


  ngOnInit() {
  }

}
