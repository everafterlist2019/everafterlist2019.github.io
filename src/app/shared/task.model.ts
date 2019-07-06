import {subTask} from './subtask2.model';

export class Task {
  id: number;
  label: boolean;
  name: string;
  done : boolean;
  inUser1List: boolean;
  inUser2List: boolean;
  subtasks : subTask[];
}
