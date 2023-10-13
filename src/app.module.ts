import { join } from 'path';
import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";

@Module({
  imports: [TodoModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    // debug: false,
    // playground: false
    autoSchemaFile: join( process.cwd(), 'src/schema.gql')
    ,})
        ],
  controllers: [],
  providers: [],
})
export class AppModule {}
