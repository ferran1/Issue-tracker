import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project, Status} from '../../models/project';
import {User} from '../../models/user';
import {Bug, BugSeverity} from '../../models/bug';
import {UserService} from '../../services/user.service';

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
              public route: ActivatedRoute, private userService: UserService) {
    this.addMemberToggle = false;
    this.addBugToggle = false;
  }

  public onDeleteMember(member: User) {

  }

  public onDeleteBug(bug: Bug) {

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

    this.projectMembers = this.userService.getAllUsers();

    this.projectBugs = [];
    this.projectBugs[0] = new Bug("Login failure", "Backend login request failing", BugSeverity.CRITICAL,this.projectMembers);
    this.projectBugs[1] = new Bug("Frontend bug", "Frontend homepage bug", BugSeverity.MINOR, this.projectMembers);
  }
}
