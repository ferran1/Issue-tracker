import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-add-member-popup',
  templateUrl: './add-member-popup.component.html',
  styleUrls: ['./add-member-popup.component.css']
})
export class AddMemberPopupComponent implements OnInit {

  @Output() closingToggle: EventEmitter<boolean>;
  @Input() receivedProject: Project;

  private errorMessage;
  private searchFilter;
  private users: User[];
  private userSearching: boolean; // keeps track if user is searching a user in the input
  private searchedUserEmail: string;

  constructor(private userService: UserService, private projectService: ProjectService) {
    this.closingToggle = new EventEmitter<boolean>();
    this.searchFilter = '';
    this.users = [];
    this.userSearching = false;
  }

  private onInputChanged(value) {
    this.searchedUserEmail = value;
    this.userSearching = true;
  }

  private userSelected(selectedUser: User) {
    if(confirm("Are you sure to add " + selectedUser.email + " to the project?")){
      // this.projectService.saveProject()
    } else {
      return;
    }
  }

  // checkIfListEmpty(): void {
  //   if (this.users.length == 0) this.emptyList = true;
  //   setTimeout(() => {
  //     this.emptyList =
  //       document.getElementsByClassName("org-admin-user-organisation").length ==
  //       0;
  //   }, 5);
  // }


  ngOnInit() {
    this.users = this.userService.getAllUsers();
  }


}
