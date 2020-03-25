import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../models/project';

@Component({
  selector: 'app-add-bug-popup',
  templateUrl: './add-bug-popup.component.html',
  styleUrls: ['./add-bug-popup.component.css']
})
export class AddBugPopupComponent implements OnInit {

  @Output() closingToggle: EventEmitter<boolean>;
  @Input() receivedProject: Project;

  private errorMessage;

  constructor() {
    this.closingToggle = new EventEmitter<boolean>();
  }

  private onAddBug(){

  }

  ngOnInit() {
  }

}
