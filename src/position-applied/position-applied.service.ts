import { Injectable } from '@nestjs/common';
import { CreatePositionAppliedDto } from './dto/create-position-applied.dto';
import { UpdatePositionAppliedDto } from './dto/update-position-applied.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PositionAppliedService {
  [x: string]: any;
  constructor(private readonly prisma: PrismaService) {}

  create(createPositionAppliedDto: CreatePositionAppliedDto) {
    return this.prisma.positionApplied.create({
      data: createPositionAppliedDto,
    });
  }

  findAll() {
    return this.prisma.positionApplied.findMany();
  }

  findOne(id: number) {
    return this.prisma.positionApplied.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePositionAppliedDto: UpdatePositionAppliedDto) {
    return this.prisma.positionApplied.update({
      where: { id },
      data: updatePositionAppliedDto,
    });
  }

  remove(id: number) {
    return this.prisma.positionApplied.delete({
      where: { id },
    });
  }
}
