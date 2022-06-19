import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentesService } from './studentes.service';
import { Studente } from './entities/studente.entity';
import { CreateStudenteInput } from './dto/create-studente.input';
import { UpdateStudenteInput } from './dto/update-studente.input';

@Resolver(() => Studente)
export class StudentesResolver {
  constructor(private readonly studentesService: StudentesService) {}

  @Mutation(() => Studente)
  createStudente(@Args('createStudenteInput') createStudenteInput: CreateStudenteInput) {
    return this.studentesService.create(createStudenteInput);
  }

  @Query(() => [Studente], { name: 'studentes' })
  findAll() {
    return this.studentesService.findAll();
  }

  @Query(() => Studente, { name: 'studente' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentesService.findOne(id);
  }

  @Mutation(() => Studente)
  updateStudente(@Args('updateStudenteInput') updateStudenteInput: UpdateStudenteInput) {
    return this.studentesService.update(updateStudenteInput.id, updateStudenteInput);
  }

  @Mutation(() => Studente)
  removeStudente(@Args('id', { type: () => Int }) id: number) {
    return this.studentesService.remove(id);
  }
}
