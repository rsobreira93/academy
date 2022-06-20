import { CreateStudentInput } from './create-studente.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudenteInput extends PartialType(CreateStudentInput) {
  @Field(() => Int)
  id: number;
}
