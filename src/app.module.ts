import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AplicationModule } from './aplication/aplication.module';
import { PrismaModule } from './prisma/prisma.module';
import { PositionAppliedModule } from './position-applied/position-applied.module';

@Module({
  imports: [AplicationModule, PrismaModule, PositionAppliedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
