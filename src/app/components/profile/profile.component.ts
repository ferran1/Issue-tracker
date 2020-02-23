import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Project, Status} from '../../models/project';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private _user: User;
  private _userCopy: User;

  constructor() { }

  private onSave(){

  }

  ngOnInit() {
    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());
    let projects = [project1, project2];

    this._user = new User("david@company.com", "test", "David", "Smith" ,false, projects);
    this._userCopy = this.user;
  }

  get user(): User {
    return this._user;
  }

  get userCopy(): User {
    return this._userCopy;
  }
}
