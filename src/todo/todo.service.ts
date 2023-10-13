import {Injectable, NotFoundException} from '@nestjs/common';
import {Todo} from "./entity/todo.entity";
import {CreateTodoInputs} from "./dtos/inputs/create-todo.inputs";
import {UpdateTodoInputs} from "./dtos/inputs/update-todo.inputs";

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        {id: 1, description: 'Tarea probabilidad', done: false},
        {id: 2, description: 'Tarea discreta', done: false},
        {id: 3, description: 'Tarea eda', done: false}
    ];

    findAll(): Todo[]{
        return this.todos;
    }

    findOne( id: number) :Todo{
        const todo = this.todos.find( todo => todo.id == id);

        if ( !todo ) throw new  NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    create( createTodoInputs: CreateTodoInputs): Todo {

        const todo = new Todo();
        todo.description = createTodoInputs.description;
        todo.id = Math.max(...this.todos.map( todo => todo.id), 0) + 1;

        this.todos.push(todo);

        return todo;
    }

    update(updateTodoInputs: UpdateTodoInputs){

        const {id, description, done } = updateTodoInputs;
        const todoToUpdate = this.findOne(id);

        if(description) todoToUpdate.description = description;
        if( done !== undefined) todoToUpdate.done = done;

        this.todos = this.todos.map( todo => {
            return ( todo.id == id ) ? todoToUpdate : todo ;
        });

        return todoToUpdate;
    }

    delete(id:number):Boolean{
        const todo = this.findOne((id));

        this.todos = this.todos.filter(todo => todo.id !== id);

        return true;
    }
}
