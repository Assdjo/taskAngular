import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskGroups } from '../../../models/task-groups';

@Component({
  selector: 'app-task',
  standalone: false,
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {


  @Input() Task!: Task[];
  @Input() taskDesc!:string;
  @Input() index!:number;


  toggle(index: number) {
    // Basculer le statut dans la liste locale
    this.Task[index].statut = !this.Task[index].statut;

    // Récupérer les données du localStorage
    const storedData = localStorage.getItem('task');
    if (storedData) {
      // Parse des données existantes
      const taskGroups: TaskGroups[] = JSON.parse(storedData);

      // Rechercher et mettre à jour le statut de la tâche dans le localStorage
      taskGroups.forEach((group: TaskGroups) => {
        group.task.forEach((task) => {
          if (task.titreTask === this.Task[index].titreTask) {
            task.statut = this.Task[index].statut; // Mettre à jour le statut
          }
        });
      });

      // Sauvegarder les données mises à jour dans le localStorage
      localStorage.setItem('task', JSON.stringify(taskGroups));
    }

  }

  addTask(){
    
  }
}
