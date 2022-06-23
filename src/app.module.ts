import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { StudentsModule } from './modules/studentes/students.module';
import { DisciplinesModule } from './modules/disciplines/disciplines.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'postgres',
      entities: ['**/modules/**/entities/*.js'],
      synchronize: true,
    }),
    StudentsModule,
    DisciplinesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
