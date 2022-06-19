import { Test, TestingModule } from '@nestjs/testing';
import { StudentesService } from './studentes.service';

describe('StudentesService', () => {
  let service: StudentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentesService],
    }).compile();

    service = module.get<StudentesService>(StudentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
