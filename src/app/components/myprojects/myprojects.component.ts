import {Component, OnInit} from '@angular/core';
import {Project, Status} from '../../models/project';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';

@Component({
    selector: 'app-myprojects',
    templateUrl: './myprojects.component.html',
    styleUrls: ['./myprojects.component.css']
  })
  export class MyprojectsComponent implements OnInit {

  private projects: Project[];
  private amountOfMembers: number;
  private userSelectedProject: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService) {
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
    this.projects = this.projectService.generateSomeProjects();
    this.amountOfMembers = this.projects.length;
  }

}
