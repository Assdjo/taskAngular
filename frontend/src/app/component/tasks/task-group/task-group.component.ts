import { Component, Input, OnInit } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';


@Component({
  selector: 'app-task-group',
  standalone: false,
  
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.css'
})
export class TaskGroupComponent  implements OnInit{

  @Input() taskGroupsList!: TaskGroups[];
  taskGroups: TaskGroups[] = []
  task : string = '';
  ngOnInit() {
    console.log(this.taskGroupsList);
    
    // Charger les données dans une variable locale
    
 if (localStorage.getItem('task')) {
  const storedData = localStorage.getItem('task'); // Récupérer les données
  if (storedData) { // Vérification que ce n'est pas null
    this.taskGroups = JSON.parse(storedData);
  }
  }  else {
    this.taskGroups = TASKGROUPSLIST;
    const temp = JSON.stringify(this.taskGroups)
    localStorage.setItem('task', temp)
  }
 
  }

  receiveDatafromForm(data:string){
    this.task= data;
  }
}

