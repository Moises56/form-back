import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PositionAppliedService } from './position-applied.service';
import { CreatePositionAppliedDto } from './dto/create-position-applied.dto';
import { UpdatePositionAppliedDto } from './dto/update-position-applied.dto';

@Controller('position-applied')
export class PositionAppliedController {
  constructor(
    private readonly positionAppliedService: PositionAppliedService,
  ) {}

  @Post()
  create(@Body() createPositionAppliedDto: CreatePositionAppliedDto) {
    return this.positionAppliedService.create(createPositionAppliedDto);
  }

  @Get()
  findAll() {
    return this.positionAppliedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.positionAppliedService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePositionAppliedDto: UpdatePositionAppliedDto,
  ) {
    return this.positionAppliedService.update(+id, updatePositionAppliedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.positionAppliedService.remove(+id);
  }
}
