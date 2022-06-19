import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Studente {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
