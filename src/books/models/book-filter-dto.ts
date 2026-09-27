import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class BookFilterDto {
  @ApiProperty({ required: false, example: 'Л.Н. Толстой' })
  @IsOptional()
  @IsString()
  author?: string;
  @ApiProperty({ required: false, example: 'Война и мир' })
  @IsOptional()
  @IsString()
  title?: string;
  @ApiProperty({ required: false, example: '1869' })
  @IsOptional()
  @IsString()
  year?: string;
}
