import {Component, OnInit} from '@angular/core';
import {Project, Status} from '../../models/project';
import {User} from '../../models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-myprojects',
    templateUrl: './myprojects.component.html',
    styleUrls: ['./myprojects.component.css']
  })
  export class MyprojectsComponent implements OnInit {

  private projects: Project[];
  private amountOfMembers: number;
  private userSelectedProject: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  private selectProject(selectedProject: Project){
    this.userSelectedProject = true;
    let testProjectId = 10;

    // this.router.navigate(['project'], {
    //   relativeTo: this.route,
    //   queryParams: {id: 3}
    //   // queryParams: {id: selectedProject.id}
    // });
  }

  private onCreateProject() {

 }

  ngOnInit() {
    this.userSelectedProject = false;
    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());

    // Temporary set ID's

    project1.id = 3;
    project2.id = 4;
    this.projects = [project1, project2];
    this.amountOfMembers = this.projects.length;
  }

}
