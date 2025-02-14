import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../../models/task';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-form-add-task',
  standalone: false,
  
  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.css'
})

export class FormAddTaskComponent {
  @Input() index!:string;
task: Task =  {
  id:"" ,
  titreTask: "",
  statut:    false,
}

constructor(private taskGroupListService: TaskGroupsListService) { }

submit() {
  console.log(this.task)
  console.log(this.index)
  this.taskGroupListService.addLesson(this.task, Number(this.index))
}
}
