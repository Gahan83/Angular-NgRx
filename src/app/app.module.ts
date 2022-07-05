import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { CollectionEffects } from './state/collection.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({books:booksReducer,collection:collectionReducer}),
    EffectsModule.forRoot([CollectionEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name: 'Books App',
      maxAge: 20,
      logOnly: false
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
