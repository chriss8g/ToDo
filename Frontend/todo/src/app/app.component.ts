import { Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {CREATE_TODO, GET_TODOS, REMOVE_TODO, UPDATE_TODO} from "./todo-queries";

import {Todo, ToDoData} from "./todoInterfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = []; // Aquí debes definir el tipo de datos adecuado para tus tareas
  showCreateTaskForm: boolean = false;
  newTaskText: string = "";


  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.update();
  }

  update(): void{
    this.apollo
      .watchQuery<ToDoData>({
        query: GET_TODOS,
      })
      .valueChanges.subscribe(({ data }) => {
      this.todos = data.todos;
      console.log(this.todos);
      console.log(data.todos);
    });
  }

  deleteTask(todo: Todo) {

      this.apollo.mutate({
        mutation: REMOVE_TODO,
        variables: {
          removeTodo: todo.id
        }
      }).subscribe(({ data }) => {
        // this.apollo
        //   .query<ToDoData>({
        //       query: GET_TODOS
        //   })
        //   .subscribe(({ data }) => {
        //     this.todos = data.todos;
        //   });
      });
  }


  toggleTaskStatus(todo: Todo) {
    this.apollo.mutate({
      mutation: UPDATE_TODO,
      variables: {
        updateTodoInputs:{
          id: todo.id,
          done: !todo.done
        }
      }
    }).subscribe(({ data }) => {
      // this.apollo
      //   .query<ToDoData>({
      //       query: GET_TODOS
      //   })
      //   .subscribe(({ data }) => {
      //     this.todos = data.todos;
      //   });
    });
  }

  toggleCreateTaskForm() {
    this.showCreateTaskForm = !this.showCreateTaskForm;
    this.newTaskText = ''; // Restablecer el campo de texto al mostrar el formulario
  }

  createTask() {
    if (this.newTaskText.trim() !== '') {

          this.apollo.mutate({
            mutation: CREATE_TODO,
            variables: {
              createTodoInputs: {
                description: this.newTaskText.trim()
              }
            }
          }).subscribe(({ data }) => {});
    }

    this.update();
  }
}

