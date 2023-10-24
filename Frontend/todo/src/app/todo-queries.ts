import { gql } from 'apollo-angular';

export const GET_TODOS = gql`
  query GetTodos {
    todos{
        done
        description
        id
    }
  }
`;

export const CREATE_TODO = gql`
        mutation CreateTodo($createTodoInputs: CreateTodoInputs!) {
          createTodo(createTodoInputs: $createTodoInputs) {
            id
            description
            done
          }
        }
      `;
export const REMOVE_TODO = gql`
      mutation RemoveTodo($removeTodo: ID!){
        removeTodo(id: $removeTodo){
            id
            done
        }
      }
    `;

export const UPDATE_TODO = gql`
      mutation UpdateTodo($updateTodoInputs : UpdateTodoInputs!){
        updateTodo(updateTodoInputs: $updateTodoInputs){
            id
            description
            done
        }
      }
   `;
