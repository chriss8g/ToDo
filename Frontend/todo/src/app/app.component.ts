import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3'];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask(index: number) {
    // Implementa la lógica para editar una tarea aquí
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}