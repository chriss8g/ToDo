import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Todo} from "./entity/todo.entity";
import {TodoService} from "./todo.service";
import {CreateTodoInputs} from "./dtos/inputs/create-todo.inputs";
import {UpdateTodoInputs} from "./dtos/inputs/update-todo.inputs";

@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ) {}
    @Query( () => [Todo], { name: 'todos'})
    findAll():Todo[]{
        return this.todoService.findAll();
    }

    @Query( ()=> Todo, {name: 'todo'})
    findOne(
        @Args('id', {type: () => Int}) id: number
    ){
        return this.todoService.findOne( id );
    }

    @Mutation( () => Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInputs') createTodoInputs: CreateTodoInputs
    ){
        return this.todoService.create( createTodoInputs);
    }

    @Mutation( () => Todo, {name: 'updateTodo'})
    updateTodo(
        @Args('updateTodoInputs') updateTodoInputs: UpdateTodoInputs
    ){
        return this.todoService.update( updateTodoInputs);
    }

    @Mutation( ()=> Boolean)
    removeTodo(
        @Args('id', {type: () => Int}) id:number)
    {
        return this.todoService.delete(id);
    }

}
