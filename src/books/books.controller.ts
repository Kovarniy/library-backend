import {
  Controller,
  Get,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
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
  findByName(@Query() bookFilterDto: BookFilterDto) {
    return this.libraryService.find(bookFilterDto);
  }

  @ApiOperation({ summary: 'Удалить книгу по id' })
  @ApiParam({ name: 'id', type: Number, description: 'ID книги' })
  @ApiNoContentResponse({ description: 'Книга успешно удалена' })
  @ApiNotFoundResponse({ description: 'Книга с таким ID не найдена' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.libraryService.remove(id);
  }

  @ApiOkResponse({
    description: 'Данные сброшены к исходному состоянию',
    type: Book,
    isArray: true,
  })
  @Post('reset')
  reset() {
    return this.libraryService.resetData();
  }
}
