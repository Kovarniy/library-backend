import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BookFilterDto {
  @ApiProperty({ required: false, example: 'Война и мир' })
  @IsOptional()
  @IsString()
  title?: string;
}
