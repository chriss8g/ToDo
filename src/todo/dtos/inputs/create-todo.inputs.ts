import {Field, InputType} from "@nestjs/graphql";


@InputType()
export class CreateTodoInputs{

    @Field( () => String, {description:' what needs to be done'})
    description: string;
}