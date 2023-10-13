import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver';
import { TodoService } from './todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "./entity/todo.entity";

@Module({
  providers: [TodoResolver, TodoService],
  imports:[
      TypeOrmModule.forFeature([Todo])
  ]
})
export class TodoModule {}
