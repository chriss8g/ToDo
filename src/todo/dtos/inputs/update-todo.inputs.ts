import {Field, ID, InputType, Int, PartialType} from "@nestjs/graphql";
import {CreateTodoInputs} from "./create-todo.inputs";


@InputType()
export class UpdateTodoInputs extends PartialType(CreateTodoInputs){

    @Field( ()=> ID)
    id: string;

}