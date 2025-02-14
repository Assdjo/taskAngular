import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';
import { Task } from '../models/task';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {

  private taskgroupList:TaskGroups[]= TASKGROUPSLIST

  getTaskGoupList(): TaskGroups[] {
    return this.taskgroupList
  }


  newid() {
  const newId = this.taskgroupList.length > 0 ? Math.max(...this.taskgroupList.map(b => Number(b.id))) + 1 : 1;
  return newId;
}

  addTask(task: TaskGroups) {
    let id = 1
    task.id = this.newid().toString()
    task.task.forEach((el) => {
      el.id =task.id + '.' + id++
    })
    const taskCopy = {...task}
    this.taskgroupList.push(taskCopy)
    console.log(taskCopy)
    console.log(this.taskgroupList);
    
    this.getTaskGoupList()
  }

  
  addLesson(task: Task, id: number): void {
    const groupTask = this.taskgroupList.find((t) => t.id === id.toString());
    
    if (groupTask) {
      const lastTaskId = groupTask.task.length > 0 
        ? Number(groupTask.task[groupTask.task.length - 1].id.split('.').pop()) 
        : 0;
      const newTaskId = `${groupTask.id}.${lastTaskId + 1}`;
  
      task.id = newTaskId;
      groupTask.task.push(task);
  
      this.getTaskGoupList(); 
      console.log(this.taskgroupList); 
    }
  }
  

}
