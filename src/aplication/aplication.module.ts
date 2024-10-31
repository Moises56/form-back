import { Module } from '@nestjs/common';
import { AplicationService } from './aplication.service';
import { AplicationController } from './aplication.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [PrismaModule], // Asegúrate de que PrismaModule está importado
  controllers: [AplicationController],
  providers: [AplicationService],
})
export class AplicationModule {}
