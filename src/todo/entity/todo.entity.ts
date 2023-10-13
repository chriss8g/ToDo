import {Field, ID, Int, ObjectType} from "@nestjs/graphql";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name:'todo'})
@ObjectType()
export class Todo {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    @Field( () => String )
    description: String;

    @Column()
    @Field( () => Boolean )
    done: boolean = false;
}