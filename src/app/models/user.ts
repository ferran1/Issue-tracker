import {Project} from './project';
/**
 * Represents object data of an user
 */

export class User {

  private _id: number;
  private _email: string;
  private _password: string;
  private _isAdmin: boolean;
  private _projects?: Project[] = [];

  constructor(email: string, password: string, isAdmin: boolean, projects?: Project[]) {
    this._email = email;
    this._password = password;
    this._isAdmin = isAdmin;
    this._projects = projects;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  get projects(): Project[] {
    return this._projects;
  }

  set projects(value: Project[]) {
    this._projects = value;
  }

  equals(user: User): boolean {
    return user.id == this.id;
  }

  // Creates an copy of the object
  static trueCopy(user: User): User{
    return Object.assign(new User(user.email, user.password, user.isAdmin, user.projects));
  }

}
