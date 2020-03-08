import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Project, Status} from '../../models/project';
import {User} from '../../models/user';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  private selectedProject: Project;
  private projectMembers: User[];

  constructor(private router: Router,
              public route: ActivatedRoute) {
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id'); //Get id parameter from the URL

    this.selectedProject = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());

    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());
    let projects = [project1, project2];

    this.projectMembers = [];

    this.projectMembers[0] = new User("david@company.com", "test", "David", "Smith" ,false, projects);
    this.projectMembers[1] = new User("jason@company.com", "test", "David", "Smith" ,true, projects);
  }

}
