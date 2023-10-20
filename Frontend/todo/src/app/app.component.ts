import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[] = ['Discreta', 'EDA', 'Sistema Operativo'];
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
