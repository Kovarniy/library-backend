import { Book } from '../models/book';

export const library: Book[] = [
  { id: '1', title: 'Война и мир', author: 'Л.Н. Толстой', year: 1869 },
  {
    id: '2',
    title: 'Преступление и наказание',
    author: 'Ф.М. Достоевский',
    year: 1866,
  },
  { id: '3', title: 'Мастер и Маргарита', author: 'М.А. Булгаков', year: 1967 },
  { id: '4', title: 'Евгений Онегин', author: 'А.С. Пушкин', year: 1833 },
  { id: '5', title: 'Отцы и дети', author: 'И.С. Тургенев', year: 1862 },
  { id: '6', title: 'Анна Каренина', author: 'Л.Н. Толстой', year: 1877 },
  {
    id: '7',
    title: 'Братья Карамазовы',
    author: 'Ф.М. Достоевский',
    year: 1880,
  },
  { id: '8', title: 'Мёртвые души', author: 'Н.В. Гоголь', year: 1842 },
];
