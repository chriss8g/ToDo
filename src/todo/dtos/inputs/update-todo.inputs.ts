import {Field, InputType, Int} from "@nestjs/graphql";


@InputType()
export class UpdateTodoInputs{

    @Field( ()=> Int)
    id: number;

    @Field( () => String, {description:' what needs to be done', nullable: true})
    description?: string;

    @Field( ()=> Boolean, {nullable: true})
    done?: boolean;
}