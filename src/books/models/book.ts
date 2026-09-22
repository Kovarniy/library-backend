import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор книги' })
  id: string;
  @ApiProperty({ example: 'Война и мир', description: 'Название книги' })
  title: string;
  @ApiProperty({ example: 'Л.Н. Толстой', description: 'ФИО автора книги' })
  author: string;
  @ApiProperty({
    example: 1869,
    description: 'Год написания книги',
  })
  year: number;
}
