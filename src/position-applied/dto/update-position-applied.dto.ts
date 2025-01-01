import { PartialType } from '@nestjs/mapped-types';
import { CreatePositionAppliedDto } from './create-position-applied.dto';

export class UpdatePositionAppliedDto extends PartialType(CreatePositionAppliedDto) {}
