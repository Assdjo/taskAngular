import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-add-task',
  standalone: false,
  
  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.css'
})
export class FormAddTaskComponent {
  @Output() dataToparent: EventEmitter<string> = new EventEmitter<string>();
  inputValue:string="";

  submit() {
  this.dataToparent.emit(this.inputValue)
  }
}
