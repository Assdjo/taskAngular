import { Component, OnInit } from '@angular/core';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';
import { TaskGroups } from '../../../models/task-groups';

@Component({
  selector: 'app-task-group-list',
  standalone: false,
  
  templateUrl: './task-group-list.component.html',
  styleUrl: './task-group-list.component.css'
})
export class TaskGroupListComponent implements OnInit{
  taskGroupsList: TaskGroups[] = []

  constructor(private TaskGroupsListService: TaskGroupsListService) {}
  
ngOnInit(): void {
  this.taskGroupsList = this.TaskGroupsListService.getTaskGoupList();


}
}
