import { Injectable } from '@angular/core';
import {Project, Status} from '../models/project';
import {User} from '../models/user';
import {Bug} from '../models/bug';
import {ProjectService} from './project.service';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private bugs: Bug[];

  constructor(private projectService: ProjectService) {
    this.bugs = [];
    this.bugs =  this.generateSomeBugs();
  }

  public getAllProjects(){
    return this.bugs;
  }

  public saveProject(bug: Bug): boolean {
    if(bug == null || undefined) return false;

    let length = this.bugs.length;

    this.bugs.push(bug);
    return !!(this.bugs.length = length + 1);
  }

  public updateProject(bug: Bug) {
    if(!bug)
      return false;

    let index: number = this.bugs.findIndex(p => p.id == bug.id);
    this.bugs[index] = bug;
    return true;
  }

  public deleteProject(project: Project): boolean {
    if (!project){
      return false;
    }
    this.bugs = this.bugs.filter(p => p.id != project.id);
    return true;
  }

  // temp function until we get bugs from the backend
  public generateSomeBugs() {
    let projects = this.projectService.getAllProjects();

    let users = [];
    users[0] = new User("david@company.com", "test", "David", "Smith" ,false, projects);
    users[1] = new User("jason@company.com", "test", "Jason", "Lewis" ,true, projects);


    return [new Bug("Backend login request error", "API call failed", users), new Bug("Javascript pop-up failed", "Javascript pop-up not working properly", users)];
  }
}
