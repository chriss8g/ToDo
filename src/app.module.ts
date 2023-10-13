import { join } from 'path';
import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { GraphQLModule } from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";

@Module({
  imports: [

      ConfigModule.forRoot(),

      TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          synchronize: true,
          autoLoadEntities: true,
      }),
    TodoModule,
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
