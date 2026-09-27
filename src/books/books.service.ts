import { Injectable, NotFoundException } from '@nestjs/common';
import { library } from './data/data';
import { Book } from './models/book';
import { matchesQuery } from 'src/utils/matches-query';
import { BookFilterDto } from './models/book-filter-dto';

@Injectable()
export class LibraryService {
  private library = library;

  find({ title, author, year }: BookFilterDto): Book[] {
    for (let i = 0; i < 20_000_000_000; i++) {
      // Имитация тяжелой операции
    }

    if (!title && !author && !year) {
      return this.library;
    }
    if (title === author && author === String(year)) {
      return this.library.filter(
        (book) =>
          matchesQuery(book.title, title) ||
          matchesQuery(book.author, author) ||
          matchesQuery(String(book.year), year),
      );
    }

    return this.library.filter(
      (book) =>
        matchesQuery(book.title, title) &&
        matchesQuery(book.author, author) &&
        matchesQuery(String(book.year), year),
    );
  }

  remove(id: string) {
    if (!this.library.find((book) => book.id === id)) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }

    this.library = this.library.filter((book) => book.id !== id);
    return;
  }

  resetData() {
    this.library = library;
    return library;
  }
}
