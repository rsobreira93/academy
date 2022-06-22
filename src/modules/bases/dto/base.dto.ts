import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseDTO {
  @Field()
  id: string;

  @FilterableField()
  created_at: Date;

  @FilterableField()
  updated_at: Date;

  @FilterableField()
  deleted_at: Date;
}
