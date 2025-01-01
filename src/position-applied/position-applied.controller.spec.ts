import { Test, TestingModule } from '@nestjs/testing';
import { PositionAppliedController } from './position-applied.controller';
import { PositionAppliedService } from './position-applied.service';

describe('PositionAppliedController', () => {
  let controller: PositionAppliedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionAppliedController],
      providers: [PositionAppliedService],
    }).compile();

    controller = module.get<PositionAppliedController>(PositionAppliedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
