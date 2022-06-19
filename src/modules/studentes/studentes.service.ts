import { Injectable } from '@nestjs/common';
import { CreateStudenteInput } from './dto/create-studente.input';
import { UpdateStudenteInput } from './dto/update-studente.input';

@Injectable()
export class StudentesService {
  create(createStudenteInput: CreateStudenteInput) {
    return 'This action adds a new studente';
  }

  findAll() {
    return `This action returns all studentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studente`;
  }

  update(id: number, updateStudenteInput: UpdateStudenteInput) {
    return `This action updates a #${id} studente`;
  }

  remove(id: number) {
    return `This action removes a #${id} studente`;
  }
}
