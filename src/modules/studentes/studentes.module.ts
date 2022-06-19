import { Module } from '@nestjs/common';
import { StudentesService } from './studentes.service';
import { StudentesResolver } from './studentes.resolver';

@Module({
  providers: [StudentesResolver, StudentesService]
})
export class StudentesModule {}
