import { Injectable } from '@nestjs/common';
import { library } from './data/data';
import { Book } from './models/book';
import { matchesQuery } from 'src/utils/matches-query';

@Injectable()
export class LibraryService {
  private library = library;

  find(searchTitle: string): Book[] {
    if (!searchTitle) {
      return this.library;
    }
    return this.library.filter(({ title }) => matchesQuery(title, searchTitle));
  }

  remove(_id: string) {
    this.library = this.library.filter(({ id }) => id === _id);
    return this.library;
  }
}
