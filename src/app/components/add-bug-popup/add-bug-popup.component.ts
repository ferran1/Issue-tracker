import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from '../../models/project';
import {BugSeverity} from '../../models/bug';

@Component({
  selector: 'app-add-bug-popup',
  templateUrl: './add-bug-popup.component.html',
  styleUrls: ['./add-bug-popup.component.css']
})
export class AddBugPopupComponent implements OnInit {

  @Output() closingToggle: EventEmitter<boolean>;
  @Input() receivedProject: Project;

  private errorMessage;
  private selectedSeverity: string;
  private keyValueArray;

  constructor() {
    this.closingToggle = new EventEmitter<boolean>();
    this.keyValueArray = [];
  }

  private onAddBug(){

  }

  ngOnInit() {
    // fill the severity array
    this.keyValueArray  = Object.keys(BugSeverity).map(k => ({key: k, value: BugSeverity[k as any]}));
  }

}
