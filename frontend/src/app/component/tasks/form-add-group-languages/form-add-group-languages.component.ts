import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../../models/task';
import { TaskGroups } from '../../../models/task-groups';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-form-add-group-languages',
  standalone: false,
  
  templateUrl: './form-add-group-languages.component.html',
  styleUrl: './form-add-group-languages.component.css'
})
export class FormAddGroupLanguagesComponent { 

  constructor(private taskGroupListService: TaskGroupsListService){}


  newId(){
    return this.taskGroupListService.newid().toString();
  }
  id = 0
  tasks : TaskGroups = {
    id : "",
    titreGroupTasks: "",
    task: [
      {
        id:"" ,
        titreTask: "",
        statut:    false,
      },
        {
        id: "",
        titreTask: "",
        statut:    false,
      },
        {
        id: "",
        titreTask: "",
        statut:    false,
      },
    ],
    statut: false
  }

   




onSubmit() {
  console.log(this.tasks);
        this.taskGroupListService.addTask(this.tasks)
    }

    addTask() {
      this.tasks.task.push({
        id: "",
        titreTask: "",
        statut:    false,
      })
    }

    removetask(index: number) {
      this.tasks.task.splice(index, 1);
    }
}
