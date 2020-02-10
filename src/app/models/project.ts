import {User} from './user';
import {Bug} from './bug';

// Project status enum
export enum Status {
    ACTIVE = "Active",
    ON_SCHEDULE = "On schedule",
    DELAYED = "Delayed",
    BEING_TESTED = "Being tested",
    ON_HOLD = "On hold",
    COMPLETED = "Completed"
}

/**
 * Represents object data of a project
 */
export class Project {

  private _id: number;
  private _name: string;
  private _owner: User;
  private _status: string; // Will contain one of the values of Status enum
  private _dateCompleted: Date;
  private _members?: User[] = [];
  private _bugs: Bug[] = [];

  constructor(name: string, owner: User, status: string, dateCompleted: Date, members: User[], bugs: Bug[]) {
    this._name = name;
    this._owner = owner;
    this._status = status;
    this._dateCompleted = dateCompleted;
    this._members = members;
    this._bugs = bugs;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get owner(): User {
    return this._owner;
  }

  set owner(value: User) {
    this._owner = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get dateCompleted(): Date {
    return this._dateCompleted;
  }

  set dateCompleted(value: Date) {
    this._dateCompleted = value;
  }

  get members(): User[] {
    return this._members;
  }

  set members(value: User[]) {
    this._members = value;
  }

  get bugs(): Bug[] {
    return this._bugs;
  }

  set bugs(value: Bug[]) {
    this._bugs = value;
  }

  equals(project: Project): boolean {
    return project.id == this.id;
  }

  static getEnumFromValue(value: string): string{
    switch (value) {
      case Status.ACTIVE:
        return "Active";
      case Status.BEING_TESTED:
        return "Being tested";
      case Status.DELAYED:
        return "Delayed";
      case Status.ON_SCHEDULE:
        return "On schedule";
      case Status.ON_HOLD:
        return "On hold";
      case Status.COMPLETED:
        return "Completed";
    }
  }

  static trueCopy(project: Project) {
    return Object.assign(new Project(project.name, project.owner, project.status, project.dateCompleted, project.members, project.bugs));
  }

}
