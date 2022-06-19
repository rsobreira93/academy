import { CreateStudenteInput } from './create-studente.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudenteInput extends PartialType(CreateStudenteInput) {
  @Field(() => Int)
  id: number;
}
