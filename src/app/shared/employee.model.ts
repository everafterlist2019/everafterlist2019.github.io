import {subTask} from './subtask.model';

export class Employee {
  id : string;
  inUser1List: boolean;
  inUser2List: boolean;
  displayOrder: number;
  fullName : string;
  done: boolean;
  newSubTask : string;
  subTasks : subTask[];
}
