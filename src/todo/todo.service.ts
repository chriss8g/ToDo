import {Injectable, NotFoundException} from '@nestjs/common';
import {Todo} from "./entity/todo.entity";
import {CreateTodoInputs} from "./dtos/inputs/create-todo.inputs";
import {UpdateTodoInputs} from "./dtos/inputs/update-todo.inputs";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo>
    ) {
    }

    async findAll(){
        return this.todoRepository.find();
    }

    async findOne( id: string){
        const todo = await this.todoRepository.findOneBy({id});

        if ( !todo ) throw new  NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    async create( createTodoInputs: CreateTodoInputs) {

        const todo = this.todoRepository.create(createTodoInputs);

        return await this.todoRepository.save(todo);
    }

    async update(id: string, updateTodoInputs: UpdateTodoInputs){

        const todo = await this.todoRepository.preload( updateTodoInputs);

        if(!todo) throw new  NotFoundException(`Todo with id ${id} not found`);
        return this.todoRepository.save(todo);
    }

    async delete(id:string){
        const todo = await this.findOne(id);

        await  this.todoRepository.remove(todo)

        return todo;
    }
}
