import {Injectable} from '@angular/core';

import {User} from '../models/user';
import {ProjectService} from './project.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[];

  constructor(private projectService: ProjectService) {
    this.users = [];
    this.users = this.generateSomeUsers();
  }

  public getAllUsers(): User[] {
    return this.users;
  }

  public saveUser(user: User): boolean {
    if (user == null || undefined) {
      return false;
    }

    let length = this.users.length;

    this.users.push(user);
    return !!(this.users.length = length + 1);
  }

  public updateUser(user: User): boolean {
    if (!user) {
      return false;
    }

    let index: number = this.users.findIndex(p => p.id == user.id);
    this.users[index] = user;
    return true;
  }

  public deleteUser(user: User): boolean {
    if (!user) {
      return false;
    }
    this.users = this.users.filter(p => p.id != user.id);
    return true;
  }

  // temp function until we get bugs from the backend
  public generateSomeUsers(): User[] {
    let projects = this.projectService.getAllProjects();

    let users = [];
    users[0] = new User('david@company.com', 'test', 'David', 'Smith', false, projects);
    users[1] = new User('jason@company.com', 'test', 'Jason', 'Lewis', true, projects);

    return users;
  }
}
