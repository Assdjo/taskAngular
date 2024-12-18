import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {

  private taskgroupList:TaskGroups[]= TASKGROUPSLIST

  getTaskGoupList(): TaskGroups[] {
    return this.taskgroupList
  }

}
