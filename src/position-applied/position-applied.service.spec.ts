import { Test, TestingModule } from '@nestjs/testing';
import { PositionAppliedService } from './position-applied.service';

describe('PositionAppliedService', () => {
  let service: PositionAppliedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PositionAppliedService],
    }).compile();

    service = module.get<PositionAppliedService>(PositionAppliedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
