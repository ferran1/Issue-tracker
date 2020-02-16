import {Component, OnInit} from '@angular/core';
import {Project, Status} from '../../models/project';
import {User} from '../../models/user';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit {

  private projects: Project[];
  private amountOfMembers: number;

  constructor() {
    this.projects = [];

    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());
    this.projects = [project1, project2];
    this.amountOfMembers = this.projects.length;
  }

  onCreateProject() {

}

  ngOnInit() {
  }

}
