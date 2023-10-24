import { Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {CREATE_TODO, GET_DOING, GET_DONE, GET_TODOS, REMOVE_TODO, UPDATE_TODO} from "./todo-queries";

import {Todo, ToDoData, ToDoData0, ToDoData1, ToDoData2} from "./todoInterfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = []; // Aquí debes definir el tipo de datos adecuado para tus tareas
  doing: Todo[] = [];
  done: Todo[] = [];
  newTaskText: string = "";


  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.apollo
      .watchQuery<ToDoData0>({
        query: GET_TODOS,
        fetchPolicy: 'network-only' // Agrega esta línea
      })
      .valueChanges.subscribe(({ data }) => {
      this.todos = data.todos0;
    });


    this.apollo
      .watchQuery<ToDoData1>({
        query: GET_DOING,
        fetchPolicy: 'network-only' // Agrega esta línea
      })
      .valueChanges.subscribe(({ data }) => {
      this.doing = data.todos1;
    });


    this.apollo
      .watchQuery<ToDoData2>({
        query: GET_DONE,
        fetchPolicy: 'network-only' // Agrega esta línea
      })
      .valueChanges.subscribe(({ data }) => {
      this.done = data.todos2;
    });
  }

  deleteTask(todo: Todo) {

      this.apollo.mutate({
        mutation: REMOVE_TODO,
        variables: {
          removeTodo: todo.id
        }
      }).subscribe(({ data }) => {
        this.update();
      });
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
          }).subscribe(({ data }) => {
            this.update();
          });
    }
  }

  moveTask(todo: Todo, left: string) {
    let i = 0;
    if(left == "left")
      i = -1;
    else
      i = 1;

    this.apollo.mutate({
      mutation: UPDATE_TODO,
      variables: {
        updateTodoInputs:{
          id: todo.id,
          status: todo.status+i
        }
      }
    }).subscribe(({ data }) => {
      this.update();
    });
  }

}

