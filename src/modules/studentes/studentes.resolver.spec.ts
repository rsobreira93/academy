import { Test, TestingModule } from '@nestjs/testing';
import { StudentesResolver } from './studentes.resolver';
import { StudentesService } from './studentes.service';

describe('StudentesResolver', () => {
  let resolver: StudentesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentesResolver, StudentesService],
    }).compile();

    resolver = module.get<StudentesResolver>(StudentesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
