export interface ToDoData {
  todos: Todo[]; // Task[] representa un arreglo de tareas
}
// Define un tipo para la estructura de una tarea
export interface Todo {
  id: string;
  description: string;
  done: boolean;
}
