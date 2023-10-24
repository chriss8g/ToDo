import { gql } from 'apollo-angular';

export const GET_TODOS = gql`
      query GetTodos {
        todos0{
          id
          description
          status
        }
      }
    `;
export const GET_DOING = gql`
        {
          todos1{
            id
            description
            status
          }
        }
      `;
export const GET_DONE = gql`
        {
          todos2{
            id
            description
            status
          }
        }
      `;

export const CREATE_TODO = gql`
        mutation CreateTodo($createTodoInputs: CreateTodoInputs!) {
          createTodo(createTodoInputs: $createTodoInputs) {
            id
            description
            status
          }
        }
      `;
export const REMOVE_TODO = gql`
      mutation RemoveTodo($removeTodo: ID!){
        removeTodo(id: $removeTodo){
            id
        }
      }
    `;

export const UPDATE_TODO = gql`
      mutation UpdateTodo($updateTodoInputs : UpdateTodoInputs!){
        updateTodo(updateTodoInputs: $updateTodoInputs){
            id
            description
            status
        }
      }
   `;
