import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Book } from '../book-list/books.model';
import { GoogleBooksService } from '../book-list/books.service';
import {
  getBooks,
  getBooksFailed,
  retrievedBookListSuccess,
} from './books.actions';

@Injectable({ providedIn: 'root' })
export class CollectionEffects {
  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map((books: Book[]) => retrievedBookListSuccess({ books })),
          catchError(() => of(getBooksFailed))
        )
      )
    )
  );
}
