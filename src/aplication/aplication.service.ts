import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAplicationDto } from './dto/create-aplication.dto';
// import { UpdateAplicationDto } from './dto/update-aplication.dto';

@Injectable()
export class AplicationService {
  [x: string]: any;
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAplicationDto) {
    return this.prisma.applicant.create({ data });
  }

  async findAll() {
    return this.prisma.applicant.findMany();
  }

  async findOne(id: number) {
    return this.prisma.applicant.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<CreateAplicationDto>) {
    return this.prisma.applicant.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.prisma.applicant.delete({ where: { id } });
  }
}
