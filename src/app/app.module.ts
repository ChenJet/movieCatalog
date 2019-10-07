import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ColorsModalComponent } from './components/modals/colors-modal/colors-modal.component';
import { NewMovieModalComponent } from './components/modals/new-movie-modal/new-movie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CatalogComponent,
    ColorsModalComponent,
    NewMovieModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    ColorsModalComponent,
    NewMovieModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
