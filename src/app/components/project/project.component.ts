import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project, Status} from '../../models/project';
import {User} from '../../models/user';
import {Bug} from '../../models/bug';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private selectedProject: Project;
  private projectMembers: User[];
  private projectBugs: Bug[];

  public addMemberToggle: boolean;
  public addBugToggle: boolean;

  constructor(private router: Router,
              public route: ActivatedRoute) {
    this.addMemberToggle = false;
    this.addBugToggle = false;
  }

  onDeleteMember(member: User) {

  }

  onDeleteBug(bug: Bug) {

  }

  onAddNewMember() {
    this.addMemberToggle = true;
  }

  onAddNewBug() {
    this.addBugToggle = true;
  }

  onCloseReq() {
    console.log("test");
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id'); //Get project id parameter from the URL

    this.selectedProject = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());

    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2z", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());
    let projects = [project1, project2];
    this.projectMembers = [];
    this.projectMembers[0] = new User("david@company.com", "test", "David", "Smith" ,false, projects);
    this.projectMembers[1] = new User("jason@company.com", "test", "Jason", "Lewis" ,true, projects);

    this.projectBugs = [];
    this.projectBugs[0] = new Bug("Login failure", "Backend login request failing", this.projectMembers);
    this.projectBugs[1] = new Bug("Frontend bug", "Frontend homepage bug", this.projectMembers);
  }
}
