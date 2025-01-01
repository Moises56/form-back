import { Module } from '@nestjs/common';
import { PositionAppliedService } from './position-applied.service';
import { PositionAppliedController } from './position-applied.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the path as necessary

@Module({
  imports: [PrismaModule],
  controllers: [PositionAppliedController],
  providers: [PositionAppliedService],
})
export class PositionAppliedModule {}
