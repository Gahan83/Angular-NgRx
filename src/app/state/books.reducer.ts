import {createReducer,on} from '@ngrx/store';

import { retrievedBookListSuccess } from "./books.actions";
import { Book } from "../book-list/books.model";

export const initialState:ReadonlyArray<Book>=[];

export const booksReducer=createReducer(
    initialState,
    on(retrievedBookListSuccess ,(state,{books})=>books)
);

