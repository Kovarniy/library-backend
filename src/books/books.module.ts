import { Module } from '@nestjs/common';
import { LibraryService as BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
