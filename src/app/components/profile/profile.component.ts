import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Project, Status} from '../../models/project';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tempUser: User;

  constructor() { }

  ngOnInit() {
    let project1 = new Project("Test1", new User("Test@gmail.com", "test", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", false), Status.ACTIVE, new Date());
    let projects = [project1, project2];

    this.tempUser = new User("name@example.com", "test", false, projects);
  }

}
