import { Injectable } from '@angular/core';
import {Project, Status} from '../models/project';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];

  constructor() {
    this.projects = [];
    this.projects =  this.generateSomeProjects();
  }

  public getAllProjects(){
    return this.projects;
  }

  public saveProject(project: Project): boolean {
    if(project == null || undefined) return false;

    let length = this.projects.length;

    this.projects.push(project);
    return !!(this.projects.length = length + 1);
  }

  public updateProject(project: Project) {
    if(!project)
      return false;

    let index: number = this.projects.findIndex(p => p.id == project.id);
    this.projects[index] = project;
    return true;
  }

  public deleteProject(project: Project): boolean {
    if (!project){
      return false;
    }
    this.projects = this.projects.filter(p => p.id != project.id);
    return true;
  }

  public addUserToProject(projectID: number, userID: number){

  }

  // temp function until we get projects from the backend
  public generateSomeProjects() {
    let project1 = new Project("Test1", new User("Test@gmail.com",  "test", "Johnny", "Petron", false), Status.ACTIVE, new Date());
    let project2 = new Project("Test2", new User("Test@gmail.com", "test", "Maarten" , "de Boer" , false), Status.ACTIVE, new Date());

    // temp set the id's
    project1.id = 3;
    project2.id = 4;

    return [project1, project2];
  }

}
