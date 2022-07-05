import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { addBook, removeBook, retrievedBookListSuccess, getBooks } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  books$=this.store.select(selectBooks);
  bookCollection$=this.store.select(selectBookCollection);

 constructor(private store:Store, private booksService:GoogleBooksService){}

 ngOnInit(): void {
  /*this.booksService.getBooks().subscribe((books)=>{
    this.store.dispatch(retrievedBookListSuccess({books}));
  })*/
  this.store.dispatch(getBooks());
 }

 onAdd(bookId:string)
 {
  this.store.dispatch(addBook({bookId}));
 }
 onRemove(bookId:string)
 {
  this.store.dispatch(removeBook({bookId}));
 }
}
