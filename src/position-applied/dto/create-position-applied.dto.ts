import { IsOptional, IsString } from 'class-validator';

export class CreatePositionAppliedDto {
  @IsOptional() @IsString() fullName?: string;
}
