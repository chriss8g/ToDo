import {Args, ID, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {Todo} from "./entity/todo.entity";
import {TodoService} from "./todo.service";
import {CreateTodoInputs} from "./dtos/inputs/create-todo.inputs";
import {UpdateTodoInputs} from "./dtos/inputs/update-todo.inputs";
import {ParseUUIDPipe} from "@nestjs/common";

@Resolver()
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ) {}
    @Query( () => [Todo], { name: 'todos'})
    async findAll(){
        return this.todoService.findAll();
    }

    @Query( ()=> Todo, {name: 'todo'})
    async findOne(
        @Args('id', {type: ()=> ID}, ParseUUIDPipe) id: string
    ){
        return this.todoService.findOne( id );
    }

    @Mutation( () => Todo, {name: 'createTodo'})
    async createTodo(
        @Args('createTodoInputs') createTodoInputs: CreateTodoInputs
    ):Promise<Todo>{
        return this.todoService.create( createTodoInputs);
    }

    @Mutation( () => Todo, {name: 'updateTodo'})
    async updateTodo(
        @Args('updateTodoInputs') updateTodoInputs: UpdateTodoInputs
    ){
        return this.todoService.update(updateTodoInputs.id, updateTodoInputs);
    }

    @Mutation( ()=> Boolean)
    async removeTodo(
        @Args('id', {type: () => ID}) id:string)
    {
        return this.todoService.delete(id);
    }

}
