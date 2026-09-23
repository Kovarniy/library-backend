import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LibraryService } from './books.service';
import { BookFilterDto } from './models/book-filter-dto';
import { Book } from './models/book';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly libraryService: LibraryService) {}

  @ApiOperation({ summary: 'Получить список книг' })
  @ApiOkResponse({
    description: 'Книга успешно найдена',
    type: Book,
    isArray: true,
  })
  @Get()
  findByName(@Query() { title }: BookFilterDto) {
    return this.libraryService.find(title);
  }

  @ApiOperation({ summary: 'Удалить книгу по id' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libraryService.remove(id);
  }
}
