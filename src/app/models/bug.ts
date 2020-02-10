import {User} from './user';

export enum BugSeverity {
  CRITICAL  = "Critical",
  MAJOR = "Major",
  MINOR = "Minor"
}

/**
 * Represents object data of an issue
 */
export class Bug {

  private id: number;
  private title: string;
  private description: string;
  private assignedMembers?: User[] = [];

}
